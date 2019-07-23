import WizardView from 'components/views/Wizard/shared/WizardView';

import ViewContainer from 'components/views/Wizard/ProjectSettings/containers/ViewContainer';
import Widget from 'components/views/Wizard/ProjectSettings/widgets/Widget';

import { projectSettingsPath } from 'helpers/routes';

export default {
  name: 'ProjectSettings',
  path: projectSettingsPath(),
  component: ViewContainer(
    <WizardView>
      <Widget />
    </WizardView>
  ),
  exact: true,
  strict: true
};
