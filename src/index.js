import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter basename='material-components-web-catalog'>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

unregister();
