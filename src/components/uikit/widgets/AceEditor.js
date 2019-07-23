import React from 'react';

import classNames from 'classnames';

import { bind } from 'lodash/function';
import { assign } from 'lodash/object';

const Editor = (props) => {
  if (typeof window !== 'undefined') {
    const Ace = require('react-ace').default;
    require('brace/mode/html');

    require('brace/theme/xcode');
    require('brace/theme/textmate');
    require('brace/theme/tomorrow');

    require('brace/keybinding/emacs');

    return React.createElement(Ace, props);
  }

  return null;
};

class IsomorphicEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      theme: 'xcode',
      isFocused: false,
      showGutter: true
    };

    this.setProp = this.setProp.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur  = this.onBlur.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }

  setProp(prop) {
    this.setState(prop);
  }

  onFocus() {
    this.setState({ isFocused: true });
  }

  onBlur() {
    this.setState({ isFocused: false });
  }

  render () {
    return this.state.mounted
      ? React.createElement('div',
        {
          className: classNames(
            'ace-editor__wrapper',
            { 'is-focused': this.state.isFocused }
            )
        }
        , React.createElement(Editor,
          assign(
            editorProps(this.props),
            {
              theme: this.state.theme,
              showGutter: this.state.showGutter,
              onFocus: () => this.onFocus(),
              onBlur:  () => this.onBlur()
            }
          )
        )
      )
      : null;
  }
}

export default IsomorphicEditor;

const editorProps = ({ onChange, value }) => ({
  mode: 'html',
  onChange,
  fontSize: 14,
  minLines: 14,
  width: '100%',
  height: '320px',
  showPrintMargin: false,
  highlightActiveLine: true,
  value,
  setOptions: {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: false,
    enableSnippets: true,
    showLineNumbers: true,
    tabSize: 2,
    searchbox: true,
    wrap: true
  }
});
