import axios from "axios";

const ApiClient = () => {
  const client = axios.create({
    baseURL: "/api",
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
      withXSRFToken: true,
    },
  });
  const get = async (url: string, params?: object) => {
    return await client.get(url, { params });
  };

  const post = async (url: string, data?: object) => {
    return await client.post(url, data);
  };

  return {
    get,
    post,
  };
};

export default ApiClient;
