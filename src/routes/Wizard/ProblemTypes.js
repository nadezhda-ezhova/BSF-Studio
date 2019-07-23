import WizardView from 'components/views/Wizard/shared/WizardView';

import ViewContainer from 'components/views/Wizard/ProblemTypes/containers/ViewContainer';
import Widget from 'components/views/Wizard/ProblemTypes/widgets/Widget';

import { problemTypesPath } from 'helpers/routes';

export default {
  name: 'ProblemTypes',
  path: problemTypesPath(),
  component: ViewContainer(
    <WizardView>
      <Widget />
    </WizardView>
  ),
  exact: true,
  strict: true
};
