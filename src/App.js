import React, { Component } from 'react';
import Button from './Button.js';
import HeaderBar from './HeaderBar.js';

class App extends Component {
  render() {
    if (window.location.pathname === '/button.html') {
      return <Button />
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
