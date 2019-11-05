import Gravitation from 'components/views/Gravitation';

import { gravitationPath } from 'helpers/routes';

export default {
  name: 'Gravitation',
  path: gravitationPath(),
  component: Gravitation,
  exact: true,
  strict: true
};