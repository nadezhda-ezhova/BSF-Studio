import Wizard from 'components/containers/Wizard';

import { mainPath } from 'helpers/routes';

export default {
  name: 'Wizard',
  path: mainPath,
  component: Wizard,
  exact: true,
  strict: true
};