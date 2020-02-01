import React, { Fragment } from 'react';

import Editor from 'components/shared/Editor';
import Outputers from 'components/shared/Outputer';

import './index.css';

export default class Wizard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      output: props.output
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      output: nextProps.output
    });
  }

  render() {
    const { output } = this.state;
    const { form, compile, run } = this.props;

    return (
      <div className='main-container'>
        <main>
          <Form form={form} />
        </main>
      </div>
    );
  }
}

const Form = ({ form }) => (
  <form id={form}>
    <Editor
      title='Problem-bsfCode.cpp'
      name='bsfCode'
    />
  </form>
);