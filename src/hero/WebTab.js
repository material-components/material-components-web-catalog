import {Component} from 'react';
import React from 'react';
import equal from 'deep-equal';
import html from 'html';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {getUrlParamsFromSearch} from './HeroComponent';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MDCRipple} from '@material/ripple/index';
import ReactGA from 'react-ga';
import {gtagCopyCode} from '../constants';

const classesToRemove = [
  ' mdc-ripple-upgraded--unbounded',
  ' mdc-notched-outline--upgraded',
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
    const urlParams = getUrlParamsFromSearch(prevProps.location.search);
    const prevUrlParams = getUrlParamsFromSearch(this.props.location.search);

    if (!equal(urlParams, prevUrlParams)) {
      this.initCodeString();
    }
  }

  initCodeString = () => {
    let codeString = '';
    if (this.htmlRef.current) {
      codeString = html.prettyPrint(this.htmlRef.current.innerHTML);
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
              language='html'
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


