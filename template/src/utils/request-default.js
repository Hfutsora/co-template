import axios from 'axios';
import _toString from 'lodash/toString';

function isInternalError(errorCode) {
  return _toString(errorCode).startsWith('5');
}

axios.interceptors.request.use(
  // Do something before request is sent
  (config) => config,
  // Do something with request error
  (error) => Promise.reject(error)

  ,
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    const { status } = response;

    // Do something with response data
    if (isInternalError(status)) {
      // Do something with 5xx error
    }

    return response.data;
  },
  (error) => {
    if (error.request && error.request.readyState === 4) {
      console.error('network error');
    }
    // Do something with response error
    return Promise.reject(error);
  },
);
