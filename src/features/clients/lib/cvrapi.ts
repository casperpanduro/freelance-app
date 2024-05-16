import axios from "axios";

const cvrapi = () => {
  const client = axios.create({
    baseURL: "https://cvrapi.dk/api",
  });

  const search = async (cvr: string) => {
    const response = await client.get(`/`, {
      params: {
        search: cvr,
        country: "dk",
      },
    });
    return response.data;
  };

  return {
    search,
  };
};

export default cvrapi;
