/* eslint-disable import/max-dependencies */
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';

import { compile, run } from 'actions';
import { get, flowRight } from 'lodash';

import Constructor from 'components/views/Constructor';

import bsfCode from 'samples/jacobi/bsfCode';
import bsfParameters from 'samples/jacobi/bsfParameters';
import bsfTypes from 'samples/jacobi/bsfTypes';
import data from 'samples/jacobi/data';
import forwards from 'samples/jacobi/forwards';
import include from 'samples/jacobi/include';
import parameters from 'samples/jacobi/parameters';
import types from 'samples/jacobi/types';

const stateToProps = (state) => {

  return {
    output: state.output,
    values: get(state, 'form.Jacobi.values'),
    initialValues: {
      bsfCode,
      bsfParameters,
      bsfTypes,
      data,
      forwards,
      include,
      parameters,
      types
    }
  };
};

const actionsToProps = (dispatch) => ({
  compile: flowRight(dispatch, compile),
  run: flowRight(dispatch, run),
});

const mergeProps = (stateProps, actionProps, ownProps) => Object.assign(
  {},
  ownProps,
  stateProps,
  {
    compile: () => {
      actionProps.compile(stateProps.values);
    },
    run: () => {
      actionProps.run(stateProps.values);
    }
  }
);

export default connect(
  stateToProps,
  actionsToProps,
  mergeProps
)(reduxForm({
  form: 'Jacobi',
  enableReinitialize: true,
  destroyOnUnmount: true,
  keepDirtyOnReinitialize: true,
  forceUnregisterOnUnmount: true,
})(Constructor));