import * as actionTypes from 'constants/actionTypes';

const INITIAL_STATE = {
  compile: {},
  run: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.COMPILE_SUCCESS: {
      return Object.assign({}, state, {
        run: {},
        compile: action.response
      });
    }

    case actionTypes.RUN_SUCCESS: {
      return Object.assign({}, state, {
        run: action.response.run,
        compile: action.response.compile
      });
    }

    default:
      return state;
  }
}
