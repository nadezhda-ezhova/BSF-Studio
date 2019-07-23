import React from 'react';
import PropTypes from 'prop-types';

import WizardLayout from 'components/uikit/layouts/WizardLayout';

import WizardMenu from 'components/views/dashboard/widgets/WizardMenu';
import DocumentMeta from 'components/uikit/DocumentMeta';

import { compact } from 'lodash';

const WizardView = ({ aside, main, children, decorators }) => (
  <WizardLayout
    main={compact([
      React.createElement(children, { decorator: decorators.widget })
      , ...main
    ])}
    aside={compact([
      <WizardMenu decorator={decorators.sidebarMenu} />
      , ...aside
    ])}
    meta={[
      <DocumentMeta decorator={decorators.meta} />
    ]}
  />
);

WizardView.propTypes = {
  children: PropTypes.node.isRequired,
  aside: PropTypes.array,
  main:  PropTypes.array,
  decorators: PropTypes.shape({
    widget: PropTypes.func,
    sidebarMenu: PropTypes.func
  })
};

WizardView.defaultProps = {
  aside: [],
  main: [],
  decorators: {}
};

export default WizardView;
