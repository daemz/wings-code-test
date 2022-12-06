import axios from 'axios';

// modify the base url here
// export const BASE_URL = 'https://api.com'
export const BASE_URL = 'https://638ea2874ddca317d7e2ae9b.mockapi.io/api/v1';

export const API = {
  async get(url: string, headers?: any): Promise<any> {
    const response = await axios.get(url, {
      baseURL: BASE_URL,
      headers,
    });

    return response?.data;
  },
  async post(url: string, body?: any, headers?: any): Promise<any> {
    const response = await axios.post(url, body, {
      baseURL: BASE_URL,
      headers,
    });

    return response?.data;
  },
  async patch(url: string, body?: any, headers?: any): Promise<any> {
    const response = await axios.patch(url, body, {
      baseURL: BASE_URL,
      headers,
    });

    return response?.data;
  },
  async put(url: string, body?: any, headers?: any): Promise<any> {
    const response = await axios.put(url, body, {
      baseURL: BASE_URL,
      headers,
    });

    return response?.data;
  },
};
