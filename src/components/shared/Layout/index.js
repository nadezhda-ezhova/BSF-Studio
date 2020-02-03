import React, { Fragment } from 'react';

import Header from './widgets/Header';

import './index.css';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
  </Fragment>
);

export default Layout;
