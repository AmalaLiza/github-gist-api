import 'whatwg-fetch';

export default function request(url, options) {
  if (options.body)
    options.body = typeof options.body !== 'string' ? JSON.stringify(options.body) : options.body;

  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  options.headers = options.headers ? Object.assign({}, defaultHeaders, options.headers) : defaultHeaders;

  return fetch(url, {
    credentials: 'same-origin',
    ...options
  }).then(response => {
    if (response.status === 200 && response.length !== 0) {
      return response.json();
    }

    throw response.statusText;
  }).then(response => {
    return response;
  });

}