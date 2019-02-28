import {Component} from 'react';
import ReactTemplates from './CodeTemplates';
import equal from 'deep-equal';
import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MDCRipple} from '@material/ripple/index';
import {gtagCopyCode} from '../constants';

import ReactGA from 'react-ga';
const customStyle = {background: 'transparent'};

export default class ReactTab extends Component {
  state = {codeString: ''};
  ripples = [];

  initRipple = (el) => {
    if (el) {
      const ripple = MDCRipple.attachTo(el);
      ripple.unbounded = true;
      this.ripples.push(ripple);
    }
  };

  initCodeString = () => {
    const {children, location} = this.props;
    const reactTemplateName = location.pathname.split('/component/')[1];
    const val = ReactTemplates[reactTemplateName](children.props.config);
    const codeString = val ? val.replace(/\n\s*\n/g, '\n') : '';
    this.setState({codeString});
  };

  componentDidMount() {
    this.initCodeString();
  }

  componentDidUpdate(prevProps) {
    if (!equal(prevProps.config.options, this.props.config.options)) {
      this.initCodeString();
    }
  }

  render() {
    return (
      <React.Fragment>
        <SyntaxHighlighter
            lineProps={{style: {paddingBottom: 8}}}
            wrapLines
            showLineNumbers
            customStyle={customStyle}
            lineNumberStyle={{color: '#bab6b6'}}
            className='highlight-html'
            language='jsx'
            style={prism}>{this.state.codeString}</SyntaxHighlighter>
        <CopyToClipboard text={this.state.codeString}
                          onCopy={() => {
                            ReactGA.event({category: gtagCopyCode, action: 'react_code_copied', label: 'react_code_copied' });
                            this.setState({copied: true})
                          }}>
          <button className='mdc-icon-button material-icons copy-all-button' ref={this.initRipple}>file_copy</button>
        </CopyToClipboard>
      </React.Fragment>
    );
  }
}
