/* eslint-disable import/max-dependencies */
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';

import { compile, run } from 'actions';
import { get, flowRight } from 'lodash';

import Constructor from 'components/views/Constructor';

import data from 'samples/jacobi/data';
import forwards from 'samples/jacobi/forwards';
import implementation from 'samples/jacobi/implementation';
import include from 'samples/jacobi/include';
import parameters from 'samples/jacobi/parameters';
import types from 'samples/jacobi/types';

const stateToProps = (state) => {

  return {
    output: state.output,
    values: get(state, 'form.Constructor.values'),
    initialValues: {
      data,
      forwards,
      implementation,
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
  form: 'Constructor',
  enableReinitialize: true,
  destroyOnUnmount: false,
  keepDirtyOnReinitialize: true,
  forceUnregisterOnUnmount: false,
})(Constructor));