export default `
  /*==============================================================================
  Project: Bulk Synchronous Farm (BSF)
  Theme: BSF Skeleton
  Module: Problem-bsfTypes.h (Predefined BSF Problem Types)
  Prefix: PT_bsf
  Author: Nadezhda A. Ezhova
  Supervisor: Leonid B. Sokolinsky
  This source code is a part of BSF Skeleton
  ==============================================================================*/
  #pragma once
  #include "Problem-Parameters.h"    // Problem Parameters 
  //=========================== BSF Types =========================
  struct PT_bsf_data_T {        // Data for workers (current approximation)
    float approximation[PP_N];    // Current approximation
    float shift[PP_N];        // Way_b of Polytope
  };
  
  struct PT_bsf_mapElem_T {  // Element of the map list
    float* inequality;    // Inequality: inequality[0]*x_1+...+inequality[n-1]*x_n <= inequality[n] 
  };
  
  struct PT_bsf_reduceElem_T {  // Element of reduce list  
    float point[PP_N];      // Current Approximation
    bool pointIn;        // Point is in Polytope
  };
`;
