/* eslint-disable import/max-dependencies */
import React, { Fragment } from 'react';

import Editor from 'components/shared/Editor';
import Outputers from 'components/shared/Outputer';

import './index.css';

export default class Constructor extends React.Component {
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
      <Fragment>
        <div className='toolbar'>
          <button onClick={compile}>Compile</button>
          <button onClick={run}>Run</button>
        </div>
        <div className='main-container'>
          <main>
            <Form form={form} />
          </main>
          <aside>
            <Outputers output={output} />
          </aside>
        </div>
      </Fragment>
    );
  }
}

const Form = ({ form }) => (
  <form id={form}>
    <Editor
      title='Problem-bsfCode.cpp'
      name='bsfCode'
    />
    <Editor
      title='Problem-bsfParameters.h'
      name='bsfParameters'
    />
    <Editor
      title='Problem-bsfTypes.h'
      name='bsfTypes'
    />
    <Editor
      title='Problem-Data.h'
      name='data'
    />
    <Editor
      title='Problem-Forwards.h'
      name='forwards'
    />
    <Editor
      title='Problem-Include.h'
      name='include'
    />
    <Editor
      title='Problem-Parameters.h'
      name='parameters'
    />
    <Editor
      title='Problem-Types.h'
      name='types'
    />
  </form>
);


