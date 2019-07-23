import WizardView from 'components/views/Wizard/shared/WizardView';

import ViewContainer from 'components/views/Wizard/ProblemParameters/containers/ViewContainer';
import Widget from 'components/views/Wizard/ProblemParameters/widgets/Widget';

import { problemParametersPath } from 'helpers/routes';

export default {
  name: 'ProblemParameters',
  path: problemParametersPath(),
  component: ViewContainer(
    <WizardView>
      <Widget />
    </WizardView>
  ),
  exact: true,
  strict: true
};
