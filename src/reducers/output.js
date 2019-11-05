const INITIAL_STATE = {};

import * as actionTypes from 'constants/actionTypes';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.COMPILE_SUCCESS: {
      return Object.assign({}, state, {
        compile: action.response
      });
    }

    case actionTypes.RUN_SUCCESS: {
      return Object.assign({}, state, action.response);
    }

    default:
      return state;
  }
}