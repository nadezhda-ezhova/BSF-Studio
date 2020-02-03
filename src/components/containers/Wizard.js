/* eslint-disable import/max-dependencies, camelcase */
import { connect } from 'react-redux';

import { reduxForm } from 'redux-form';

import { compile, run } from 'actions';
import { get, flowRight } from 'lodash';

import Wizard from 'components/views/Wizard';

import {
  PC_bsf_Init, PC_bsf_AssignListSize, PC_bsf_CopyData, PC_bsf_MapF, PC_bsf_ReduceF,
  PC_bsf_ProcessResults, PC_bsf_ParametersOutput, PC_bsf_IterOutput, PC_bsf_ProblemOutput,
  PC_bsf_SetInitApproximation, PC_bsf_SetMapSubList,
  PC_user_Functions
} from 'samples/wizard/bsfCode';
import bsfParameters from 'samples/wizard/bsfParameters';
import { PT_bsf_data_T, PT_bsf_mapElem_T, PT_bsf_reduceElem_T } from 'samples/wizard/bsfTypes';
import data from 'samples/wizard/data';
import forwards from 'samples/wizard/forwards';
import include from 'samples/wizard/include';
import parameters from 'samples/wizard/parameters';
import types from 'samples/wizard/types';

const stateToProps = (state) => {
  return {
    output: state.output,
    values: get(state, 'form.Wizard.values'),
    initialValues: {
      bsfCode: {
        PC_bsf_Init,
        PC_bsf_AssignListSize,
        PC_bsf_CopyData,
        PC_bsf_MapF,
        PC_bsf_ReduceF,
        PC_bsf_ProcessResults,
        PC_bsf_ParametersOutput,
        PC_bsf_IterOutput,
        PC_bsf_ProblemOutput,
        PC_bsf_SetInitApproximation,
        PC_bsf_SetMapSubList,
        PC_user_Functions
      },
      bsfParameters,
      bsfTypes: {
        PT_bsf_data_T,
        PT_bsf_mapElem_T,
        PT_bsf_reduceElem_T
      },
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
  form: 'Wizard'
})(Wizard));