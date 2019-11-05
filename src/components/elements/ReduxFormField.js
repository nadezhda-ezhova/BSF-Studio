import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form';

import { assign, omit } from 'lodash/object';

const ReduxFormField = (props) =>
  React.createElement(Field,
    assign({}, props, {
      inputComponent: props.component,
      component: InputComponentAdapter
    })
  );

export default ReduxFormField;

const InputComponentAdapter = (props) =>
  React.createElement(props.inputComponent,
    omit(assign({}, props, {
      onChange: (value) => {
        props.input.onChange(value);
        (typeof props.onChange == 'function') && props.onChange(value);
      },
      value: props.input.value,
      name: props.input.name,
      //...more if needed
    }), ['inputComponent', 'input', 'meta', 'apperance'])
  );

ReduxFormField.propTypes = {
  component: PropTypes.any
};

InputComponentAdapter.defaultProps = {

};

InputComponentAdapter.propTypes = {
  inputComponent: PropTypes.any,
  input: PropTypes.any,
  onChange: PropTypes.func,
  apperance: PropTypes.bool
};