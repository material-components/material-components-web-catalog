// TODO(mattgoo): remove this once react chips is updated.
// Array.from is not supported by IE11 and is in react-chips/react-ripple.
// https://github.com/material-components/material-components-web-react/issues/700
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = function (object) {
      'use strict';
      return [].slice.call(object);
  };
}
