/* eslint-disable import/max-dependencies */
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';

import { compile, run } from 'actions';
import { flowRight } from 'lodash';

import Constructor from 'components/views/Constructor';

import data from 'samples/gravitation/data';
import forwards from 'samples/gravitation/forwards';
import implementation from 'samples/gravitation/implementation';
import include from 'samples/gravitation/include';
import parameters from 'samples/gravitation/parameters';
import types from 'samples/gravitation/types';

const stateToProps = (state) => {

  return {
    output: state.output,
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
      actionProps.compile();
    },
    run: () => {
      actionProps.run();
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

