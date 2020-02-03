/* eslint-disable camelcase */

export const PC_bsf_Init = `
  void PC_bsf_Init(bool* success) { // success=false if initialization is unsuccessful
  
  }; 
`;

export const PC_bsf_AssignListSize = `
  void PC_bsf_AssignListSize(int* listSize) {
  
  };
`;

export const PC_bsf_CopyData = `
  void PC_bsf_CopyData(PT_bsf_data_T* dataIn, PT_bsf_data_T* dataOut) {
  
  };
`;

export const PC_bsf_MapF = `
  void PC_bsf_MapF(PT_bsf_mapElem_T* mapElem, PT_bsf_reduceElem_T* reduceElem, PT_bsf_data_T* data,
    int* success // 1 - reduceElem was produced successfully; 0 - otherwise
  ){
  
  };
`;

export const PC_bsf_ReduceF = `
  void PC_bsf_ReduceF(PT_bsf_reduceElem_T* x, PT_bsf_reduceElem_T* y, PT_bsf_reduceElem_T* z) { // z = x + y
  
  };
`;

export const PC_bsf_ProcessResults = `
  void PC_bsf_ProcessResults(
    bool* exit, // "true" if Stopping Criterion is satisfied, and "false" otherwise
    PT_bsf_reduceElem_T* reduceResult,
    int count, // Number of successfully produced Elrments of Reduce List
    PT_bsf_data_T* data // Next Approximation
  ){
  
  };
`;

export const PC_bsf_ParametersOutput = `
  void PC_bsf_ParametersOutput(int numOfWorkers, PT_bsf_data_T data) {
  
  };
`;

export const PC_bsf_IterOutput = `
  void PC_bsf_IterOutput(PT_bsf_reduceElem_T* reduceResult, int count, PT_bsf_data_T data,
    int iterCount, double elapsedTime) {
  
  //  static int counter = 0;  // Iteration Counter
  //  counter++;
  //  cout << "------------------ " << counter << " ------------------" << endl;
  
  };
`;

export const PC_bsf_ProblemOutput = `
  void PC_bsf_ProblemOutput(PT_bsf_reduceElem_T* reduceResult, int count, PT_bsf_data_T data,
    int iterCount, double t) {// Output Function
  
  };
`;

export const PC_bsf_SetInitApproximation = `
  void PC_bsf_SetInitApproximation(PT_bsf_data_T* data) {
  
  };
`;

export const PC_bsf_SetMapSubList = `
  void PC_bsf_SetMapSubList(PT_bsf_mapElem_T* subList, int count, int offset, bool* success) {
    for (int j = 0; j < count; j++) {
  
    };
  };
`;

export const PC_user_Functions = `
  //----------------------------- User functions -----------------------------
`;

const bsfCode = ({
  PC_bsf_Init, PC_bsf_AssignListSize, PC_bsf_CopyData, PC_bsf_MapF, PC_bsf_ReduceF,
  PC_bsf_ProcessResults, PC_bsf_ParametersOutput, PC_bsf_IterOutput, PC_bsf_ProblemOutput,
  PC_bsf_SetInitApproximation, PC_bsf_SetMapSubList,
  PC_user_Functions
}) => `
  /*==============================================================================
  Project: Bulk Synchronous Farm (BSF)
  Theme: BSF Skeleton
  Module: Problem-bsfCode.cpp (Problem-dependent Code)
  Prefix: PI
  Author: Nadezhda A. Ezhova
  Supervisor: Leonid B. Sokolinsky
  This source code is a part of BSF Skeleton
  ==============================================================================*/
  #include "Problem-Data.h"        // Problem Types 
  #include "Problem-Forwards.h"    // Problem Function Forwards
  #include "Problem-Include.h"     // Problem "Include" Files
  using namespace std;
  
  //----------------------- Predefined problem-dependent functions -----------------

  ${PC_bsf_Init}
  
  ${PC_bsf_AssignListSize}
  
  ${PC_bsf_CopyData}
  
  ${PC_bsf_MapF}
  
  ${PC_bsf_ReduceF}
  
  ${PC_bsf_ProcessResults}
  
  ${PC_bsf_ParametersOutput}
  
  ${PC_bsf_IterOutput}
  
  ${PC_bsf_ProblemOutput}
  
  ${PC_bsf_SetInitApproximation}
  
  ${PC_bsf_SetMapSubList}
  
  ${PC_user_Functions}
`;

export default bsfCode;