import React, { Component } from 'react';

import './ComponentPage.scss'

class ComponentPage extends Component {
  componentDidMount() {
    const activeComponent = document.querySelector(this.props.sidebarComponentSelector);
    activeComponent.classList.add('sidebar-active');
  }

  render() {
    return (
      <div>
        <section className='hero'>
          {this.props.hero}
        </section>

        <div className='mdc-layout-grid'>
          <div className='mdc-layout-grid__inner'>
            <section className='sidebar mdc-layout-grid__cell mdc-layout-grid__cell--span-2'>
              <a href='/button.html' role='listitem' className='sidebar-buttons mdc-list-item'>Buttons</a>
              <a href='/card.html' role='listitem' className='sidebar-cards mdc-list-item'>Cards</a>
            </section>

            <section className='demo-wrapper mdc-layout-grid__cell mdc-layout-grid__cell--span-10'>
              <h1 className='mdc-typography--headline'>{this.props.title}</h1>
              <p className='mdc-typography--body1'>
                {this.props.description}
              </p>

              <h2 className='mdc-typography--title'>Resources</h2>
              <a href={this.props.designLink} role='listitem' className='mdc-list-item' target='_blank'>
                <span className='mdc-list-item__graphic'><img src='material_design_black_24dp.png' className='resources-icon'/></span>
                <span className='mdc-list-item__text'>Material Design Guidelines</span>
              </a>
              <a href={this.props.docsLink} role='listitem' className='mdc-list-item' target='_blank'>
                <span className='mdc-list-item__graphic'><img src='drive_document_black_24dp.png' className='resources-icon'/></span>
                <span className='mdc-list-item__text'>Documentation</span>
              </a>
              <a href={this.props.sourceLink} role='listitem' className='mdc-list-item' target='_blank'>
                <span className='mdc-list-item__graphic'><img src='code_black_24dp.png' className='resources-icon'/></span>
                <span className='mdc-list-item__text'>Source Code</span>
              </a>

              <h2 className='mdc-typography--title'>Demos</h2>
              {this.props.demos}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentPage;
