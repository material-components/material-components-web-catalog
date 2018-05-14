import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ReactGA from 'react-ga';

ReactGA.initialize('UA-118996389-1');

const history = createHistory();
const historyListener = (location) => {
  ReactGA.set({ page: location.hash });
  ReactGA.pageview(location.hash);
};

history.listen(historyListener);

// Trigger on initial load except for redirect.
if (window.location.hash !== '') {
  historyListener(window.location);
}

ReactDOM.render((
  <HashRouter onUpdate={history}>
    <App />
  </HashRouter>
), document.getElementById('root'));

unregister();
