import { connect } from 'react-redux';

import { compile, run } from 'actions';
import { flowRight } from 'lodash';

import Constructor from 'components/containers/Constructor';

import data from 'samples/gravitation/data';
import forwards from 'samples/gravitation/forwards';
import implementation from 'samples/gravitation/implementation';
import include from 'samples/gravitation/include';
import parameters from 'samples/gravitation/parameters';
import types from 'samples/gravitation/types';

export default connect(
  (state) => ({
    output: state.output
  }),
  (dispatch) => ({
    compile: flowRight(dispatch, compile),
    run: flowRight(dispatch, run),
  }))(Constructor);