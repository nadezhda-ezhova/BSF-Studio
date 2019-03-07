/* globals __CLIENT__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import reducers from 'reducers';

import ContentfulMiddleware from 'middleware/Contentful'; 

export default function (INITIAL_STATE = {}) {
  const composeEnhancers = __CLIENT__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers(reducers),
    INITIAL_STATE, 
    composeEnhancers(applyMiddleware(ContentfulMiddleware))
  );
}