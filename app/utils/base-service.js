import Settings from '../config/settings';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const get = (endpoint, headers) => (
  fetch(`${Settings.apiUrl}${endpoint}`, {
    method: 'GET',
    headers: headers || defaultHeaders,
  })
);

export const getById = () => { };
