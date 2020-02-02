import React from 'react';

import classnames from 'classnames';

const Fields = ({ title, className, children }) => (
  <div className={classnames('fields', className)}>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Fields;