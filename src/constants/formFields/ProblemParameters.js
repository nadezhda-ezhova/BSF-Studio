//=========================== Skeleton Parameters =========================

// Decimal precision on output
export const PP_BSF_PRECISION = 'PP_BSF_PRECISION';

// If PP_BSF_ITER_OUTPUT is defined then Iteration Output is performed
export const PP_BSF_ITER_OUTPUT = 'PP_BSF_ITER_OUTPUT';

//--------------------------- OpenMP Parameters ---------------------------

// If PP_BSF_OMP is defined then OpenMP is turned on for Map Step
export const PP_BSF_OMP = 'PP_BSF_OMP';

// If PP_BSF_NUM_THREADS is udefined then all accessable threads are used
export const PP_BSF_NUM_THREADS = 'PP_BSF_PRECISION';


export const PROBLEM_PARAMETERS_FORM = 'PROBLEM_PARAMETERS_FORM';
export const PROBLEM_PARAMETERS_FIELDS = [
  PP_BSF_PRECISION,
  PP_BSF_ITER_OUTPUT,
  PP_BSF_OMP,
  PP_BSF_NUM_THREADS
];
