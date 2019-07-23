import { assign, get } from 'lodash';

import * as types from 'constants/actionTypes';

const initialState = {
  isFetching: false,
  isError: false,
  result: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.META_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.META_FAILURE:
      return assign({}, initialState, { isError: true });
    case types.META_SUCCESS:
      return assign({}, initialState, { result: action.response });
    default:
      return state;
  }
};
