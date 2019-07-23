import WizardView from 'components/views/Wizard/shared/WizardView';

import ViewContainer from 'components/views/Wizard/NewProjectSettings/containers/ViewContainer';
import Widget from 'components/views/Wizard/NewProjectSettings/widgets/Widget';

import { newProjectSettingsPath } from 'helpers/routes';

export default {
  name: 'NewProjectSettings',
  path: newProjectSettingsPath(),
  component: ViewContainer(
    <WizardView>
      <Widget />
    </WizardView>
  ),
  exact: true,
  strict: true
};
