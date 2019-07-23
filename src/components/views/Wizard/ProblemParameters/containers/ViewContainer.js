import React from 'react';

import { assign } from 'lodash/assign';

import MenuContainer from 'components/views/Wizard/shared/MenuContainer';
import FormContainer from './FormContainer';
//import MetaContainer from './MetaContainer';

export default (Component) => (props) =>
  React.createElement(Component, assign({}, props, {
      decorators: {
        sidebarMenu: MenuContainer,
        widget: FormContainer,
        //meta: MetaContainer
      }
    })
  );
