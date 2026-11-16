import axios from 'axios';

const API_URL = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');

if (!API_URL) {
  // eslint-disable-next-line no-console
  console.error(
    'REACT_APP_API_URL is not set. Point it at your Vercel API base, e.g. https://your-app.vercel.app/api',
  );
}

const api = axios.create({
  baseURL: API_URL || undefined,
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Let the browser set multipart boundaries for FormData uploads.
    if (typeof FormData !== 'undefined' && config.data instanceof FormData) {
      if (typeof config.headers?.set === 'function') {
        config.headers.set('Content-Type', undefined);
      } else {
        delete config.headers['Content-Type'];
      }
    } else if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    return config;
  },
  (error) => Promise.reject(error),
);

async function normalizeError(error) {
  const data = error.response?.data;
  if (typeof Blob !== 'undefined' && data instanceof Blob) {
    try {
      const text = await data.text();
      const parsed = JSON.parse(text);
      if (parsed?.message) {
        error.response.data = parsed;
      }
    } catch {
      // Keep the original blob error payload.
    }
  }
  return error;
}

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const normalized = await normalizeError(error);
    if (normalized.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(normalized);
  },
);

export default api;
