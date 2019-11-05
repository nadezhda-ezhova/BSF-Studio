/* eslint-disable import/max-dependencies */
import React, { Fragment } from 'react';

import AceEditor from 'components/widgets/AceEditor';
import Field from 'components/elements/ReduxFormField';

import { get } from 'lodash';

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
    const { compile, run } = this.props;

    return (
      <Fragment>
        <div className='toolbar'>
          <button onClick={compile}>Compile</button>
          <button onClick={run}>Run</button>
        </div>
        <div className='main-container'>
          <main>
            <Editors />
          </main>
          <aside>
            <Outputers output={output} />
          </aside>
        </div>
      </Fragment>
    );
  }
}

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

const Editors = () => (
  <form id='Constructor'>
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
      title='Problem-Implementation.h'
      name='implementation'
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

const Outputer = ({ title, value }) => (
  <Fragment>
    <h2>{title}</h2>
    <AceEditor value={value}/>
  </Fragment>
);

const Outputers = ({ output }) => (
  <Fragment>
    <Outputer
      title='Compilation Output'
      value={(() => {
        const
          compile = get(output, 'compile', {}),
          success = compile.code === 0 ? 'Compiled successfully!' : '',
          code    = compile.code   ? `CODE: ${compile.code}\n`     : '',
          stdout  = compile.stdout ? `STDOUT: ${compile.stdout}\n` : '',
          stderr  = compile.stderr ? `STDERR: ${compile.stderr}\n` : '';

        return `${success}${code}${stdout}${stderr}`;
      })()
      }
    />

    <Outputer
      title='Runner Output'
      value={get(output, 'run.stdout')}
    />
  </Fragment>
);
