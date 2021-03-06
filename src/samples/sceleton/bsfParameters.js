export default `
  /*==============================================================================
  Project: Bulk Synchronous Farm (BSF)
  Theme: BSF Skeleton
  Module: Problem-bsfParameters.h (Predefined Problem Parameters)
  Prefix: PP_BSF
  Author: Nadezhda A. Ezhova
  Supervisor: Leonid B. Sokolinsky
  This source code is a part of BSF Skeleton
  ==============================================================================*/
  
  //=========================== Skeleton Parameters =========================
  #define PP_BSF_PRECISION 4    // Decimal precision on output
  #define PP_BSF_ITER_OUTPUT    // If PP_BSF_ITER_OUTPUT is defined then Iteration Output is performed
  #define PP_BSF_TRACE_COUNT 10  // Each PP_BSF_TRACE_COUNT-th iteration to be outputted
  //--------------------------- OpenMP Parameters ---------------------------
  #define PP_BSF_OMP        // If PP_BSF_OMP is defined then OpenMP is turned on for Map Step
  //#define PP_BSF_NUM_THREADS 2  // If PP_BSF_NUM_THREADS is udefined then all accessable threads are used
`;