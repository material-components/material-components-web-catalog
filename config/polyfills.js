'use strict';

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
  require('raf').polyfill(global);
}

// TODO(mattgoo): remove this once react chips is updated.
// Array.from is not supported by IE11 and is in react-chips/react-ripple.
// https://github.com/material-components/material-components-web-react/issues/700
if (!Array.from) {
  Array.from = function (object) {
    if (!object) return [];
    return [].slice.call(object);
  };
}

// TODO remove once react chips is updated since classlist.contains is not supported in 
// IE11.
require('classlist-polyfill');