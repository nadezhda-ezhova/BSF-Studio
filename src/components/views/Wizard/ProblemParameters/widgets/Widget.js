import React from 'react';
import PropTypes from 'prop-types';

import FormHeader from 'components/uikit/elements/FormHeader';
import Decoratable from 'components/uikit/hoc/Decoratable';

import Form from './Form';

const Widget = (props) => (
  <div className='_content'>
    <FormHeader
      header=''
      subheader=''
    />
    <Form {...props} />
  </div>
);

export default Decoratable(Widget);

Widget.propTypes = {
  name: PropTypes.string.isRequired,
  profileId: PropTypes.any.isRequired
};
