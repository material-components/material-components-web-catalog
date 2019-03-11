import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {unregister} from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ReactGA from 'react-ga';
import {gtagCodeSnippetsCategory} from './constants';

ReactGA.initialize('UA-118996389-1');

// This ensures the first page view is captured
let previousPath = window.location.hash.split('?')[0];
ReactGA.set({page: previousPath});
ReactGA.pageview(previousPath);

const history = createHistory();

// When the history changes, the current component path should be compared to the
// previous path to ensure that adjusting the variant types doesn't register
// as different page views.
const historyListener = (location) => {
  const currPath = location.hash.split('?')[0];
  if (previousPath !== currPath) {
    ReactGA.set({page: location.hash});
    ReactGA.pageview(location.hash);
    previousPath = currPath;
  } else {
    // Variant change event so the code snippets usage gets tracked.
    ReactGA.event({category: gtagCodeSnippetsCategory, action: previousPath, label: location.hash});
  }
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
