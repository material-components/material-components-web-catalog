import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-118996389-1');

const history = createHistory();
history.listen((location) => {
  ReactGA.set({ page: location.hash });
  ReactGA.pageview(location.hash);
});

ReactDOM.render((
  <HashRouter onUpdate={history}>
    <App />
  </HashRouter>
), document.getElementById('root'));

unregister();
