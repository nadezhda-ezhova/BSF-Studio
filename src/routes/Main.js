import Main from 'components/containers/Main';

import { mainPath } from 'helpers/routes';

export default {
  name: 'Main',
  path: mainPath,
  component: Main,
  exact: true,
  strict: true
};