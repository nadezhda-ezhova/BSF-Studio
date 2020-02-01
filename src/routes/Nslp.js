import Nslp from 'components/containers/Nslp';

import { nslpPath } from 'helpers/routes';

export default {
  name: 'NSLP',
  path: nslpPath,
  component: Nslp,
  exact: true,
  strict: true
};