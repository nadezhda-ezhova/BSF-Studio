import React from 'react';

import { omit } from 'lodash/object';

const Decoratable = (component) => (props) =>
  !props.decorator
  ? React.createElement(component, props)
  : React.createElement(props.decorator(component), omit(props, ['decorator']));

export default Decoratable;
