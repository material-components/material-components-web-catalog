import React, {Component} from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import './styles/HeroComponent.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactTemplates from './CodeTemplates';
import {HeroOptionsComponent} from './HeroOptionsComponent';
import html from 'html';
import queryString from 'query-string';
import equal from 'deep-equal';


const getUrlParamsFromSearch = function(search) {
  return queryString.parse(search);
}

class HeroComponent extends Component {
  constructor(props) {
    super(props);
    // Deep copy for local object
    this.localConfig = JSON.parse(JSON.stringify(this.props.initialConfig));
    const urlParams = getUrlParamsFromSearch(this.props.location.search);
    this.localConfig = this.copyUrlParamsToLocalConfig(this.localConfig, urlParams);
  }

  copyUrlParamsToLocalConfig(localConfig, urlParams) {

    // For each url param, copy it over to the local config in the appropriate place.
    Object.keys(urlParams).forEach((key) => {
      if (localConfig.options) {
        localConfig.options.forEach((opt) => {
          if (key === opt.urlParam) {
            // To be cleaned up with a standardized model when all option types are defined.
            if (opt.type === 'radiogroup' || opt.type === 'textfield') {
              opt.value = urlParams[key];
            }
          }
        });
      } 
    });

    return localConfig;
  }

  render() {
    const urlParams = getUrlParamsFromSearch(this.props.location.search);
    this.localConfig = this.copyUrlParamsToLocalConfig(this.localConfig, urlParams);

    return (
      <React.Fragment>
        <div className='heroComponent'>
          <HeroTabs config={this.localConfig} {...this.props}>
            {React.cloneElement(this.props.children, {...this.props.children.props, ...{config: this.localConfig}})}
          </HeroTabs>
        </div>
      </React.Fragment>
    )
  }
}

class HeroTabs extends Component {
  state = {activeIndex: 0, codeString: ''};

  handleActiveIndexUpdate = (activeIndex) => {
    this.setState({activeIndex});
  };

  render() {
    const {children, location} = this.props;

    const tabContents = [
      children,
      <WebTab location={location}>{children}</WebTab>,
      <ReactTab location={location}>{children}</ReactTab>,
    ];

    return (
      <React.Fragment>
        <TabBar
            activeIndex={this.state.activeIndex}
            handleActiveIndexUpdate={this.handleActiveIndexUpdate}
            className='catalog-hero-tab-bar'>
          {['Demo', 'Web', 'React'].map((tabName, index) => {
            return (
              <Tab className='hero-tab' key={index}>
                <span>{tabName}</span>
              </Tab>
            )})}
        </TabBar>
        <div className={'tab-container'}>
          {tabContents.map((content, index) => {
            if (this.state.activeIndex !== index) return null;
            return (
              <div className='tab-content' key={index}>
                {content}
              </div>
            );
          })}
        <HeroOptionsComponent {...this.props} />
        </div>

      </React.Fragment>
    )
  }
}

const classesToRemove = [
    ' mdc-ripple-upgraded--unbounded',
    ' mdc-notched-outline--upgraded',
];

class WebTab extends Component {
  htmlRef = React.createRef();

  state = {codeString: ''};
  el = null;

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
      </React.Fragment>
    );
  }
}

class ReactTab extends Component {
  state = {codeString: ''};

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
      </React.Fragment>
    );
  }

}

export default HeroComponent;