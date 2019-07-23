import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import AceEditor from 'components/widgets/AceEditor';

import { compile } from 'actions/compile';
import { flowRight } from 'lodash';

import data from 'samples/data';
import forwards from 'samples/forwards';
import implementation from 'samples/implementation';
import include from 'samples/include';
import parameters from 'samples/parameters';
import types from 'samples/types';

const Main = ({ }) => (
  <Fragment>
    <button onClick={compile}>Compile</button>

    <h2>Problem-Data.h</h2>
    <AceEditor value={data} />

    <h2>Problem-Forwards.h</h2>
    <AceEditor value={forwards} />

    <h2>Problem-Implementation.cpp</h2>
    <AceEditor value={implementation} />

    <h2>Problem-Include.h</h2>
    <AceEditor value={include} />

    <h2>Problem-Parameters.h</h2>
    <AceEditor value={parameters} />

    <h2>Problem-Types.h</h2>
    <AceEditor value={types} />
  </Fragment>
);

export default connect(
  null,
  (dispatch) => ({
  compile: flowRight(dispatch, compile),
}))(Main);
