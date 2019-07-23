export const mainPath = () =>
  '/';

export const projectsPath = () =>
  '/projects';

export const projectPath = (projectId = ':projectId') =>
  `/projects/${projectId}`;

export const newProjectSettingsPath = () =>
  '/projects/new';

export const projectSettingsPath = (projectId) =>
  `${projectPath(projectId)}/settings`;

export const problemParametersPath = (projectId) =>
  `${projectPath(projectId)}/problem-parameters`;

export const problemTypesPath = (projectId) =>
  `${projectPath(projectId)}/problem-types`;
