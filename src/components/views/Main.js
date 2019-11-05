import { connect } from 'react-redux';

import { compile, run } from 'actions';
import { flowRight } from 'lodash';

import Main from 'components/containers/Main';

export default connect(
  (state) => ({
    output: state.output
  }),
  (dispatch) => ({
    compile: flowRight(dispatch, compile),
    run: flowRight(dispatch, run),
  }))(Main);