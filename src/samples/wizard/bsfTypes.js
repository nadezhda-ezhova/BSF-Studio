/* eslint-disable camelcase */

export const PT_bsf_data_T = `
  struct PT_bsf_data_T {        // Data for workers (current approximation)
    // Pointers are not allowed here
  };
`;

export const PT_bsf_mapElem_T = `
  struct PT_bsf_mapElem_T {      // Element of map list
    // Pointers are not allowed here
  };
`;

export const PT_bsf_reduceElem_T = `
  struct PT_bsf_reduceElem_T {    // Element of reduce list  
    // Pointers are not allowed here
  };
`;

const bsfTypes = ({ PT_bsf_data_T, PT_bsf_mapElem_T, PT_bsf_reduceElem_T }) => `
  /*==============================================================================
  Project: Bulk Synchronous Farm (BSF)
  Theme: BSF Skeleton
  Module: Problem-bsfTypes.h (Predefined Problem Types)
  Prefix: PT_bsf
  Author: Nadezhda A. Ezhova
  Supervisor: Leonid B. Sokolinsky
  This source code is a part of BSF Skeleton
  ==============================================================================*/
  #pragma once
  #include "Problem-Parameters.h"    // Problem Parameters 
  //=========================== BSF Types =========================
  ${PT_bsf_data_T}
  
  ${PT_bsf_mapElem_T}
  
  ${PT_bsf_reduceElem_T}
`;

export default bsfTypes;