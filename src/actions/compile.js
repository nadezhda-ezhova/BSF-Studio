import { API_CALL } from 'middleware/API';

import * as types from 'constants/actionTypes/compile';

export const compile = (text) => ({
  [API_CALL]: {
    root: 'https://import.sanatorex.ru',
    endpoint: '/compile',
    payload: { text },
    method: 'POST',
    types: [
      types.COMPILE_REQUEST,
      types.COMPILE_SUCCESS,
      types.COMPILE_FAILURE
    ]
  }
});
