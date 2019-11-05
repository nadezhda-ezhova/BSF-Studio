import Gravitation from 'components/containers/Gravitation';

import { gravitationPath } from 'helpers/routes';

export default {
  name: 'Gravitation',
  path: gravitationPath,
  component: Gravitation,
  exact: true,
  strict: true
};