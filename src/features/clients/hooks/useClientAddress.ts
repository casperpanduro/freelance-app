import { Client } from "@/features/clients/types";

const useClientAddress = () => {
  const getAddress = (client: Client) => {
    const { address, city, zip } = client;
    return `${address}, ${city}, ${zip}`;
  };

  return {
    getAddress,
  };
};

export default useClientAddress;
