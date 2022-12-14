import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.API_URL,
  validateStatus: () => true
});

const responseSuccessInterceptor = (response) => {
  return response;
};

const networkErrorInterceptor = (error) => {
  switch (error.response.status) {
    case 401:
      console.log('Unauthorized');
      break;
    case 403:
      console.log('Forbidden');
      break;
    case 404:
      console.log('Not Found');
      break;
    case 500:
      console.log('Internal Server Error');
      break;
    case 502:
      console.log('Bad Gateway');
      break;
    default:
      console.log('Error');
      break;
  }
  return Promise.reject(error);
};

instance.interceptors.response.use(
  responseSuccessInterceptor,
  networkErrorInterceptor
);
