import Main from 'components/views/Main';

import { mainPath } from 'helpers/routes';

export default {
  name: 'Main',
  path: mainPath(),
  component: Main,
  exact: true,
  strict: true
};