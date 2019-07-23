/* global __CLIENT__ __DEVELOPMENT__ __DEVTOOLS__ */

import { createStore, applyMiddleware } from 'redux';

import APIMiddleware from 'middleware/API';

import reducers from 'reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

let create;

const clientMiddleWares = [];

const composeEnhancers = composeWithDevTools({
  // TODO: update it
});

//!NOTE: здесь создается Store
if (__DEVELOPMENT__ && __DEVTOOLS__) {
  create = initialState => (
    createStore(reducers, initialState, composeEnhancers(
      applyMiddleware(
        APIMiddleware,
        ...clientMiddleWares
      ),
    ))
  );
} else {
  create = initialState => (
    applyMiddleware(
      APIMiddleware,
      ...clientMiddleWares
    )(createStore)(reducers, initialState)
  );
}

export default create;
