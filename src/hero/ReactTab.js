import {Component} from 'react';
import ReactTemplates from './CodeTemplates';
import equal from 'deep-equal';
import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {getUrlParamsFromSearch} from './HeroComponent';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MDCRipple} from '@material/ripple/index';
import ReactGA from 'react-ga';
import {gtagCopyCode} from '../constants';

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
    const {children} = this.props;
    const val = ReactTemplates[children.type.name](children.props.config);
    const codeString = val ? val.replace(/\n\s*\n/g, '\n') : '';
    this.setState({codeString});
  };

  // TODO: Convert this to pass the config object and work for componentDidUpdate
  componentDidMount() {
    this.initCodeString();
  }

  componentDidUpdate(prevProps) {
    const urlParams = getUrlParamsFromSearch(prevProps.location.search);
    const prevUrlParams = getUrlParamsFromSearch(this.props.location.search);

    if (!equal(urlParams, prevUrlParams)) {
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