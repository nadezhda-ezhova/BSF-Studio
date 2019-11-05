/* eslint-disable import/max-dependencies */
import React, { Fragment } from 'react';

import AceEditor from 'components/widgets/AceEditor';

import { get } from 'lodash';

import './index.css';

export default class Main extends React.Component {
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

const Editor = ({ title, value }) => (
  <Fragment>
    <h2>{title}</h2>
    <AceEditor value={value}/>
  </Fragment>
);

const Editors = () => (
  <Fragment>
    <Editor
      title='Problem-Data.h'
      value={data}
    />
    <Editor
      title='Problem-Forwards.h'
      value={forwards}
    />
    <Editor
      title='Problem-Implementation.h'
      value={implementation}
    />
    <Editor
      title='Problem-Include.h'
      value={include}
    />
    <Editor
      title='Problem-Parameters.h'
      value={parameters}
    />
    <Editor
      title='Problem-Types.h'
      value={types}
    />
  </Fragment>
);

const Outputers = ({ output }) => (
  <Fragment>
    <Editor
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

    <Editor
      title='Runner Output'
      value={get(output, 'run.stdout')}
    />
  </Fragment>
);


