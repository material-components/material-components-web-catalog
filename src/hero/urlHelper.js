import queryString from 'query-string';

export const getUrlParamsFromSearch = function(search) {
  return queryString.parse(search);
};
