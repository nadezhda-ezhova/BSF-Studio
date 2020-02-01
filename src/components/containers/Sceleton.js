/* eslint-disable import/max-dependencies */
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';

import { compile, run } from 'actions';
import { get, flowRight } from 'lodash';

import Constructor from 'components/views/Constructor';

import bsfCode from 'samples/sceleton/bsfCode';
import bsfParameters from 'samples/sceleton/bsfParameters';
import bsfTypes from 'samples/sceleton/bsfTypes';
import data from 'samples/sceleton/data';
import forwards from 'samples/sceleton/forwards';
import include from 'samples/sceleton/include';
import parameters from 'samples/sceleton/parameters';
import types from 'samples/sceleton/types';

const stateToProps = (state) => {

  return {
    output: state.output,
    values: get(state, 'form.Constructor.values'),
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
  form: 'Constructor'
})(Constructor));