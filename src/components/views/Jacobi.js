import { connect } from 'react-redux';

import { compile, run } from 'actions';
import { flowRight } from 'lodash';

import Constructor from 'components/containers/Constructor';

import data from 'samples/jacobi/data';
import forwards from 'samples/jacobi/forwards';
import implementation from 'samples/jacobi/implementation';
import include from 'samples/jacobi/include';
import parameters from 'samples/jacobi/parameters';
import types from 'samples/jacobi/types';

export default connect(
  (state) => ({
    output: state.output
  }),
  (dispatch) => ({
    compile: flowRight(dispatch, compile),
    run: flowRight(dispatch, run),
  }))(Constructor);