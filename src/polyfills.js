// TODO(mattgoo): remove this once react chips is updated.
// Array.from is not supported by IE11 and is in react-chips/react-ripple.
// https://github.com/material-components/material-components-web-react/issues/700

if (!Array.from) {
  Array.from = function (object) {
    if (!object) return [];
    return [].slice.call(object);
  };
}
