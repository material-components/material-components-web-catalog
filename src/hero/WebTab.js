import {Component} from 'react';
import React from 'react';
import equal from 'deep-equal';
import pretty from 'pretty';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MDCRipple} from '@material/ripple/index';
import {gtagCopyCode} from '../constants';

import ReactGA from 'react-ga';

const classesToRemove = [
  ' mdc-ripple-upgraded--unbounded',
  ' mdc-notched-outline--upgraded',
  ' style="transition-duration: 0s;"'
];

export default class WebTab extends Component {
  htmlRef = React.createRef();

  state = {codeString: ''};
  el = null;
  ripples = [];

  initRipple = (el) => {
    if (el) {
      const ripple = MDCRipple.attachTo(el);
      ripple.unbounded = true;
      this.ripples.push(ripple);
    }
  };

  componentDidMount() {
    this.initCodeString();
  }

  componentWillUnmount() {
    this.ripples.map((ripple) => ripple.destroy());
  }

  componentDidUpdate(prevProps) {
    if (!equal(prevProps.config.options, this.props.config.options)) {
      this.initCodeString();
    }
  }

  initCodeString = () => {
    let codeString = '';
    if (this.htmlRef.current) {
      codeString = pretty(this.htmlRef.current.innerHTML);
      classesToRemove.forEach((str) => codeString = codeString.replace(new RegExp(str, 'g'), ''));
      this.setState({codeString});
    }

    this.setState({codeString});
  };

  render() {
    return (
        <React.Fragment>
          <div style={{display: 'none'}} ref={this.htmlRef}>{this.props.children}</div>
          <SyntaxHighlighter
              lineProps={{style: {paddingBottom: 8}}}
              wrapLines
              showLineNumbers
              lineNumberStyle={{color: '#bab6b6'}}
              className='highlight-html'
              language='markup'
              style={prism}>{this.state.codeString}</SyntaxHighlighter>
          <CopyToClipboard text={this.state.codeString}
                           onCopy={() => {
                             ReactGA.event({category: gtagCopyCode, action: 'web_code_copied', label: 'web_code_copied' });
                             this.setState({copied: true})
                           }}>
            <button className='mdc-icon-button material-icons copy-all-button' ref={this.initRipple}>file_copy</button>
          </CopyToClipboard>
        </React.Fragment>
    );
  }
}


