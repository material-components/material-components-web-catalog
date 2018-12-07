import React, {Component} from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import './styles/HeroComponent.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {ReactTemplates} from './CodeTemplates';

import html from 'html';

class HeroComponent extends Component {

  render() {
    return (
        <div className='heroComponent'>
            <HeroTabs>
              {this.props.children}
            </HeroTabs>
          {/*<OptionsPanel config={config}></OptionsPanel>*/}
        </div>
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
          {tabContents.map((content, index) => {
            if (this.state.activeIndex !== index) return;
            return (
              <div className='tabContent' key={index}>
                {content}
              </div>
            );
          })}
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