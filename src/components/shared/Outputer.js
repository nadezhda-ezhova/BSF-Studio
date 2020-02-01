import React, { Fragment } from 'react';

import AceEditor from 'components/widgets/AceEditor';

import { get } from 'lodash';

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

const Outputer = ({ title, value }) => (
  <Fragment>
    <h2>{title}</h2>
    <AceEditor value={value}/>
  </Fragment>
);

export default Outputers;
