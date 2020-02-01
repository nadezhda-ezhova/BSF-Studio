import Wizard from 'components/containers/Wizard';

import { wizardPath } from 'helpers/routes';

export default {
  name: 'Wizard',
  path: wizardPath,
  component: Wizard,
  exact: true,
  strict: true
};