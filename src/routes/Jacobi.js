import Jacobi from 'components/views/Jacobi';

import { jacobiPath } from 'helpers/routes';

export default {
  name: 'Jacobi',
  path: jacobiPath(),
  component: Jacobi,
  exact: true,
  strict: true
};