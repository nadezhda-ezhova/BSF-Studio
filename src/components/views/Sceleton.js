import { connect } from 'react-redux';

import { compile, run } from 'actions';
import { flowRight } from 'lodash';

import Constructor from 'components/containers/Constructor';

import data from 'samples/sceleton/data';
import forwards from 'samples/sceleton/forwards';
import implementation from 'samples/sceleton/implementation';
import include from 'samples/sceleton/include';
import parameters from 'samples/sceleton/parameters';
import types from 'samples/sceleton/types';

export default connect(
  (state) => ({
    output: state.output
  }),
  (dispatch) => ({
    compile: flowRight(dispatch, compile),
    run: flowRight(dispatch, run),
  }))(Constructor);