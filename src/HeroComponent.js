import React, {Component} from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import './styles/HeroComponent.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {ReactTemplates} from './CodeTemplates';
import {HeroOptionsComponent} from './HeroOptionsComponent';
import html from 'html';
import queryString from 'query-string';

class HeroComponent extends Component {
  constructor(props) {
    super(props);
    this.localConfig = {...this.props.config};
    const urlParams = queryString.parse(this.props.location.search);
    for(const key in urlParams) {
      if(urlParams[key]) {
        for(let x = 0; x < this.localConfig.options.length; x++) {
          if (key === this.localConfig.options[x].urlParam) {
            const tempConfig = this.localConfig.options[x];
            if (tempConfig.type === 'radiogroup') {
              tempConfig.selected = urlParams[key];
            } else if (tempConfig.type === 'textfield') {
              tempConfig.value = urlParams[key];
            }
          }
        }
      }
    }
  }

  render() {
    const urlParams = queryString.parse(this.props.location.search);
    return (
        <React.Fragment>
          <div className='heroComponent'>
            <HeroTabs urlParams={urlParams} config={this.localConfig} {...this.props}>
              {React.cloneElement(this.props.children, {...this.props.children.props, urlParams})}
            </HeroTabs>
          </div>
        </React.Fragment>
  )
  }
}

class HeroTabs extends Component {
  state = {activeIndex: 0, codeString: ''};

  render() {
    const tabContents = [
      this.props.children,
      <WebTab>{this.props.children}</WebTab>,
      <ReactTab>{this.props.children}</ReactTab>,
    ];
    return (
      <React.Fragment>
        <TabBar
            activeIndex={this.state.activeIndex}
            handleActiveIndexUpdate={(activeIndex) => this.setState({activeIndex})}
            className='catalog-hero-tab-bar'>
          <Tab className={'hero-tab'}>
            <span className='mdc-tab__text-label'>Demo</span>
          </Tab>
          <Tab className={'hero-tab'}>
            <span className='mdc-tab__text-label'>Web</span>
          </Tab>
          <Tab className={'hero-tab'}>
            <span className='mdc-tab__text-label'>React</span>
          </Tab>
        </TabBar>
        <div className={'tab-container'}>
          {tabContents.map((content, index) => {
            if (this.state.activeIndex !== index) return;
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
  state = {codeString: ''};

  initRef = (ref) => {
    let codeString = '';
    if (ref) {
      codeString = html.prettyPrint(ref.innerHTML);
      classesToRemove.forEach((str) => codeString = codeString.replace(new RegExp(str, 'g'), ''));
    }

    this.setState({codeString});
  };

  render() {
    debugger;
    return (
        <React.Fragment>
          <div style={{display: 'none'}} ref={this.initRef}>{this.props.children}</div>
          <SyntaxHighlighter
              lineProps={{style: {paddingBottom: 8}}}
              wrapLines={true}
              showLineNumbers={true}
              lineNumberStyle={{color: '#bab6b6'}}
              className='highlight-html'
              language='html'
              style={prism}>{this.state.codeString}</SyntaxHighlighter>
        </React.Fragment>
    )
  }
}

class ReactTab extends Component {
  state = {codeString: ''};

  initCodeString = (children) => {
    const config = { label: 'Label', type: 'outlined', icon: 'code'};
    const val = ReactTemplates[children.type.name](config);
    const codeString = val ? val.replace(/\n\s*\n/g, '\n') : '';
    this.setState({codeString});
  };

  componentDidMount() {
    this.initCodeString(this.props.children);
  }

  render() {
    return (
        <React.Fragment>
          <SyntaxHighlighter
              lineProps={{style: {paddingBottom: 8}}}
              wrapLines={true}
              showLineNumbers={true}
              lineNumberStyle={{color: '#bab6b6'}}
              className='highlight-html'
              language='jsx'
              style={prism}>{this.state.codeString}</SyntaxHighlighter>
        </React.Fragment>
    )
  }

}

export default HeroComponent;