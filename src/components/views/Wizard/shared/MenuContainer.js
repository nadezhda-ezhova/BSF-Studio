import { connect } from 'react-redux';
import {
  newProjectSettingsPath,
  projectSettingsPath,
  problemParametersPath,
  problemTypesPath
} from 'helpers/routes';

import { assign, get } from 'lodash/object';
import history from 'helpers/history';

const stateToProps = (state) => ({
  projectId: get(state, 'project.id'),
  pathname: get(history, 'location.pathname')
});

const mergeProps = (stateProps, actionProps, ownProps) => {
  const menuItems = [
    {
      title: 'Настройки проекта',
      href: stateProps.projectId
        ? projectSettingsPath(stateProps.projectId)
        : newProjectSettingsPath()
    },
    {
      title: 'Параметры задачи',
      href: problemParametersPath(stateProps.projectId)
    },
    {
      title: 'Определение типов',
      href: problemTypesPath(stateProps.projectId)
    }
  ];

  return assign(
    {},
    ownProps,
    stateProps,
    actionProps,
    {
      menuItems: menuItems.map(item =>
        assign(item, {
          active: stateProps.pathname === href,
          disabled: ownProps.disabled
        })
      )
    }
  );
};

export default (Component) => connect(
  stateToProps,
  null,
  mergeProps
)(Component);
