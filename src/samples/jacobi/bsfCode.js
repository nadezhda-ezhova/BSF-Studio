export default `
  /*==============================================================================
  Project: Bulk Synchronous Farm (BSF)
  Theme: BSF Skeleton
  Module: Problem-bsfCode.cpp (Problem-dependent Code)
  Prefix: PI
  Author: Nadezhda A. Ezhova
  Supervisor: Leonid B. Sokolinsky
  This source code is a part of BSF Skeleton
  ==============================================================================*/
  #include "Problem-Data.h"      // Problem Types 
  #include "Problem-Forwards.h"    // Problem Function Forwards
  #include "Problem-Include.h"    // Problem "Include" Files
  using namespace std;
  
  //----------------------- Predefined problem-dependent functions -----------------
  void PC_bsf_Init(bool* success) { // success=false if initialization is unsuccessful
  
    PD_g = (double*)malloc(PP_N * sizeof(double));
    if (PD_g == NULL) {
      *success = false;
      return;
    };
    /**/for (int i = 0; i < PP_N; i++) { // Generating Matrix A
      for (int j = 0; j < i; j++)
        PD_A[i][j] = 1;
      PD_A[i][i] = i * 2;
      for (int j = i + 1; j < PP_N; j++)
        PD_A[i][j] = 0;
    };
    PD_A[0][0] = 1;/**/
  
  /*  PD_A[0][0] = 5;    PD_A[0][1] = -2;  PD_A[0][2] = 3;
    PD_A[1][0] = -3;  PD_A[1][1] = 9;    PD_A[1][2] = 1;
    PD_A[2][0] = 2;    PD_A[2][1] = -1;  PD_A[2][2] = -7;/**/
  
    /**/for (int i = 0; i < PP_N; i++) // Generating Vector of right parts
      PD_b[i] = i + 2 * i;
    PD_b[0] = 1;/**/
  
  /*  PD_b[0] = -1;
    PD_b[1] = 2;
    PD_b[2] = 3;/**/
  
    for (int i = 0; i < PP_N; i++) { // Clculating reduced matrix Alpha
      for (int j = 0; j < PP_N; j++)
        PD_Alpha[i][j] = -PD_A[i][j] / PD_A[i][i];
      PD_Alpha[i][i] = 0;
    };
  
    for (int i = 0; i < PP_N; i++) // Clculating reduced vector beta
      PD_beta[i] = PD_b[i] / PD_A[i][i];
  }; 
  
  void PC_bsf_AssignListSize(int* listSize) {
    *listSize = PP_N;
  };
  
  void PC_bsf_CopyData(PT_bsf_data_T* dataIn, PT_bsf_data_T* dataOut) {
    for (int j = 0; j < PP_N; j++)
      dataOut->approximation[j] = dataIn->approximation[j];
  };
  
  void PC_bsf_MapF(PT_bsf_mapElem_T* mapElem, PT_bsf_reduceElem_T* reduceElem, PT_bsf_data_T* data, int numberInSublist, 
    int sublistLength, int offset, int* success // 1 - reduceElem was produced successfully (default); 0 - otherwise
  ){
    /*debug*//*
  #define NODE 1
    int rank; MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    if (rank == NODE) {
      cout << rank << ":=========>PC_bsf_MapF: numberInSublis = " << numberInSublist << "\\tsublistLength = " << sublistLength << "\\tmapElem->rowNo = " << mapElem->rowNo << endl;
      cout << "data->approximation:";
      for (int j = 0; j < PP_N; j++)
        cout << setw(8) << data->approximation[j];
      cout << endl;
    };
    /*end debug*/
  
    if (numberInSublist == 0)
      for (int i = 0; i < PP_N; i++)
        PD_g[i] = 0;
  
      for (int j = 0; j < PP_N; j++)
        PD_g[numberInSublist + offset] += PD_Alpha[mapElem->rowNo][j] * data->approximation[j];
  
    if (numberInSublist != sublistLength - 1)
      *success = 0;
    else
      for (int j = 0; j < PP_N; j++)
        reduceElem->g[j] = PD_g[j];
  
    /*debug*//*
    if (rank == NODE) {
      cout << "reduceElem->g:";
      for (int j = 0; j < PP_N; j++)
        cout << setw(8) << reduceElem->g[j];
      cout << endl;
      cout << "success=" << *success << endl;
    };
    /*end debug*/
  };
  
  void PC_bsf_ReduceF(PT_bsf_reduceElem_T* x, PT_bsf_reduceElem_T* y, PT_bsf_reduceElem_T* z) { // z = x + y
    /*debug*/
    int rank, size; MPI_Comm_rank(MPI_COMM_WORLD, &rank); MPI_Comm_size(MPI_COMM_WORLD, &size);
    if(rank != size-1)
      cout << "Error: Invocating Reduce Function by worker!" << endl;
    /*end debug*/
  
    for (int j = 0; j < PP_N; j++)
      z->g[j] = x->g[j] + y->g[j];
  };
  
  void PC_bsf_ProcessResults(
    bool* exit, // "true" if Stopping Criterion is satisfied, and "false" otherwise
    PT_bsf_reduceElem_T* reduceResult,
    int reduceCounter, // Number of successfully produced Elrments of Reduce List
    PT_bsf_data_T* data, // Current Approximation
    int iterCounter  // Iteration Counter
  ) {
    for (int j = 0; j < PP_N; j++) {
      PD_prevApproximatio[j] = data->approximation[j];
      data->approximation[j] = reduceResult->g[j] + PD_beta[j];
    };
  
    /*debug*//*
    int rank; MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    cout << rank << ":=========>PC_bsf_ProcessResults: data->approximation:" << endl;
    for (int j = 0; j < PP_N; j++)
      cout << setw(8) << data->approximation[j];
    cout << endl;
    /*end debug*/
  
    if (ExitCondition(data, iterCounter))
      *exit = true;
    else
      *exit = false;
  };
  
  void PC_bsf_ParametersOutput(int numOfWorkers, PT_bsf_data_T data) {
    cout << "=================================================== Jacobi M ====================================================" << endl;
    cout << "Number of Workers: " << numOfWorkers << endl;
  #ifdef PP_BSF_OMP
  #ifdef PP_BSF_NUM_THREADS
    cout << "Number of Threads: " << PP_BSF_NUM_THREADS << endl;
  #else
    cout << "Number of Threads: " << omp_get_num_procs() << endl;
  #endif // PP_BSF_NUM_THREADS
  #else
    cout << "OpenMP is turned off!" << endl;
  #endif // PP_BSF_OMP
  
    cout << "Dimension: N = " << PP_N << endl;
    cout << "Eps_Square = " << PP_EPS_SQUARE << endl;
  #ifdef PP_MATRIX_OUTPUT
    cout << "------- Matrix A & Column b -------" << endl;
    for (int i = 0; i < PP_N; i++) {
      for (int j = 0; j < PP_N; j++)
        cout << setw(7) << PD_A[i][j];
      cout << setw(7) << PD_b[i] << endl;
    };
    cout << endl;
    cout << "------- Matrix Alpha & Column Beta -------" << endl;
    for (int i = 0; i < PP_N; i++) {
      for (int j = 0; j < PP_N; j++)
        cout << setw(7) << PD_Alpha[i][j];
      cout << setw(7) << PD_beta[i] << endl;
    };
    cout << endl;
  #endif // PP_MATRIX_OUTPUT
    cout << "Initial approximation: "; for (int j = 0; j < PF_MIN(PP_OUTPUT_LIMIT, PP_N); j++) cout << setw(7) << data.approximation[j]; cout << (PP_OUTPUT_LIMIT < PP_N ? "..." : "") << endl;
    cout << "-------------------------------------------" << endl;
  };
  
  void PC_bsf_IterOutput(PT_bsf_reduceElem_T* reduceResult, int reduceCounter, PT_bsf_data_T data,
    int iterCounter, double elapsedTime) {
    cout << "------------------ " << iterCounter << " ------------------" << endl;
    cout << "Approximation:\\t\\t"; for (int j = 0; j < PF_MIN(PP_OUTPUT_LIMIT, PP_N); j++) cout << setw(12) << data.approximation[j]; cout << (PP_OUTPUT_LIMIT < PP_N ? "..." : "") << endl;/**/
  
  };
  
  void PC_bsf_ProblemOutput(PT_bsf_reduceElem_T* reduceResult, int reduceCounter, PT_bsf_data_T data,
    int iterCounter, double t) {// Output Function
    cout << "=============================================" << endl;
    cout << "Time: " << t << endl;
    cout << "Iterations: " << iterCounter << endl;
    cout << "Solution: "; for (int j = 0; j < PF_MIN(PP_OUTPUT_LIMIT, PP_N); j++) cout << setw(12) << data.approximation[j]; cout << (PP_OUTPUT_LIMIT < PP_N ? "..." : "") << endl;/**/
  };
  
  void PC_bsf_SetInitApproximation(PT_bsf_data_T* data) {
    for (int i = 0; i < PP_N; i++) // Generating coordinates of initial appriximation
      data->approximation[i] = PD_beta[i];
  };
  
  void PC_bsf_SetMapSubList(PT_bsf_mapElem_T* sublist, int sublistLength, int offset, bool* success) {
    for (int i = 0; i < sublistLength; i++) 
        sublist[i].rowNo = i + offset;
    /*debug*//*
    int rank; MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    cout << rank << ":=========>PC_bsf_SetMapSubList: sublistLength = " << sublistLength << "\\toffset = " << offset << endl;
    for (int i = 0; i < sublistLength; i++)
      cout << setw(5) << sublist[i].rowNo;
    cout << endl;
    /*end debug*/
  
  };
  
  //----------------------------- User functions -----------------------------
  static double NormSquare(PT_point_T x) {
    double sum = 0;
    /*#ifdef PP_BSF_OMP
    #ifdef PP_BSF_NUM_THREADS
    #pragma omp parallel for num_threads(PP_BSF_NUM_THREADS) reduction(+:sum)
    #else
    #pragma omp parallel for reduction(+:sum)
    #endif // PP_BSF_NUM_THREADS
    #endif // PP_BSF_OMP/**/
    for (int j = 0; j < PP_N; j++)
      sum += x[j] * x[j];
    return sum;
  };
  
  static bool ExitCondition(PT_bsf_data_T* data, int iterCounter) {
    PT_point_T difference; // Difference between current and previous approximations
  
  #ifdef PP_MAX_ITER_COUNT
    if (iterCounter > PP_MAX_ITER_COUNT) {
      cout << "Acceptable maximum number of iterations is exceeded: PP_MAX_ITER_COUNT = " << PP_MAX_ITER_COUNT << endl;
      return true;
    };
  #endif // PP_MAX_ITER_COUNT
  
    for (int j = 0; j < PP_N; j++)
      difference[j] = PD_prevApproximatio[j] - data->approximation[j];
    if (NormSquare(difference) < PP_EPS_SQUARE)
      return true;
    else
      return false;
  };
`;