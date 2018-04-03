import React, { Component } from 'react';
import ButtonPage from './ButtonPage.js';
import HeaderBar from './HeaderBar.js';

class App extends Component {
  render() {
    if (window.location.pathname === '/button.html') {
      return <ButtonPage />
    }

    return (
      <div>
        <HeaderBar title='Material Components Web | Catalog'/>
        <a href='/button.html'>Button</a>
      </div>
    );
  }
}

export default App;
