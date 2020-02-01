/* eslint-disable import/max-dependencies */
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';

import { compile, run } from 'actions';
import { get, flowRight } from 'lodash';

import Constructor from 'components/views/Constructor';

import bsfCode from 'samples/nslp/bsfCode';
import bsfParameters from 'samples/nslp/bsfParameters';
import bsfTypes from 'samples/nslp/bsfTypes';
import data from 'samples/nslp/data';
import forwards from 'samples/nslp/forwards';
import include from 'samples/nslp/include';
import parameters from 'samples/nslp/parameters';
import types from 'samples/nslp/types';

const stateToProps = (state) => {

  return {
    output: state.output,
    values: get(state, 'form.Nslp.values'),
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
  form: 'Nslp',
  enableReinitialize: true,
  destroyOnUnmount: true,
  keepDirtyOnReinitialize: true,
  forceUnregisterOnUnmount: true,
})(Constructor));