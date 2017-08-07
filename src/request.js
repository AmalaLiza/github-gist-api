import 'whatwg-fetch';

export default function request(url, options) {
  console.log("request")
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
    if (response.status !== 502) {
      return response.json();
    }

    throw new Error('Could not connect to server');
  }).then(response => {

    const statusCode = response.httpStatusCode;

    if (statusCode === 401) {
      localStorage.clear();
    }

    if (statusCode === 500) {
      console.log("500")
    }

    if (statusCode === 200) {
      return response;
    }

    if (statusCode === 502) {
      console.log('Show Notifications here');
    }

    const error = new Error((response && response.statusText));
    error.response = response;
    throw error;
  });

}