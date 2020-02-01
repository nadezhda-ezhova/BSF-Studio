import React, { Fragment } from 'react';

import AceEditor from 'components/widgets/AceEditor';
import Field from 'components/elements/ReduxFormField';

const Editor = ({ title, name }) => {
  const id = `constructor_${name}`;
  return (
    <Fragment>
      <h2>{title}</h2>
      <Field
        component={AceEditor}
        id={id}
        name={name}
      />
    </Fragment>
  );
};

export default Editor;
