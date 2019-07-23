import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import FormButtons from 'components/uikit/elements/FormButtons';
import AceEditor from 'components/uikit/widgets/AceEditor';

import Field from 'components/uikit/wrappers/Field';
import ReduxFormField from 'components/uikit/wrappers/ReduxFormField';

import {
  PP_BSF_PRECISION,
  PP_BSF_ITER_OUTPUT,
  PP_BSF_OMP,
  PP_BSF_NUM_THREADS
} from 'constants/formFields/ProblemParameters';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onSubmit();
  }

  handleReset(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onReset();
  }

  render() {
    const { errors, isFetching, pristine } = this.props;

    return (
      <div>
        <form
            className={classnames('ui form', { loading: isFetching })}
            onSubmit={(e) => this.handleSubmit(e)}
            onReset={(e) => this.handleReset(e)}
          >
          <FormFields errors={errors} />
        </form>
        <FormButtons
          tabIndex={6}
          pristine={pristine}
          onSubmit={(e) => this.handleSubmit(e)}
          onReset={(e) => this.handleReset(e)}
        />
      </div>
    );
  }
}

Form.defaultProps = {
  errors: {}
};

Form.propTypes = {
  errors:     PropTypes.object,
  isFetching: PropTypes.bool,
  pristine:   PropTypes.bool
};

const FormFields = ({ errors, isAdmin }) =>
  React.createElement('div', { className: 'content' }
    , React.createElement(ReduxFormField, {
      component: Name,
      error: errors[PROFILE_NAME],
      name: PROFILE_NAME
    })
    , React.createElement(ReduxFormField, {
      component: Description,
      error: errors[PROFILE_DESCRIPTION],
      name: PROFILE_DESCRIPTION,
      isAdmin
    })

    , React.createElement('div', { className: 'ui divider' })
  );

const Name = ({ value, onChange, error }) => (
  <Field classNames={'required'} label={'Имя Фамилия'} error={error}>
    <input type={'text'} value={value} onChange={onChange} />
  </Field>
);

const Description = ({ id, value, onChange, error, tabIndex }) => (
  <Field id={id} error={error} label={'Описание'}>
    <AceEditor id={id} value={value} onChange={onChange} tabIndex={tabIndex} />
  </Field>
);
