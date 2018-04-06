import React, { Component } from 'react';
import ButtonPage from './ButtonPage.js';
import HeaderBar from './HeaderBar.js';

import './App.scss';

const urlToComponentPageMap = {
  '/button.html': <ButtonPage />,
};

class App extends Component {
  render() {
    const componentPage = urlToComponentPageMap[window.location.pathname];
    if (componentPage) {
      return componentPage;
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
