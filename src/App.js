import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <header className="mdc-top-app-bar">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <span className="mdc-top-app-bar__title">Material Components Web | Catalog</span>
          </section>
        </div>
      </header>
    );
  }
}

export default App;
