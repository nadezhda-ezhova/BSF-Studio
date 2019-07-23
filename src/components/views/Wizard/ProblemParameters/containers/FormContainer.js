import { connect } from 'react-redux';
import { initialize, reduxForm, reset } from 'redux-form';

import {
  PROBLEM_PARAMETERS_FIELDS as fields,
  PROBLEM_PARAMETERS_FORM as form
} from 'constants/formFields';

import { assign, get, flowRight } from 'lodash';

const stateToProps = (state) => {

  return {

  };
};

const actionsToProps = (dispatch) => ({
  initialize: flowRight(dispatch, initialize),
  onReset: flowRight(dispatch, reset)
});

const mergeProps = (stateProps, actionProps, ownProps) =>
  assign(
    {},
    ownProps,
    stateProps,
    actionProps,
    {
    }
  );

const FormContainer = (Component) => reduxForm({
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  form,
  fields
})(Component);

export default (Component) =>
  connect(
    stateToProps,
    actionsToProps,
    mergeProps
  )(FormContainer(Component));
