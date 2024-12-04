import { Client } from "@/features/clients/types";

const useClientAddress = () => {
  const getAddress = (client: Client) => {
    const { address, city, zip } = client;
    return `${address}, ${zip} ${city}`;
  };

  return {
    getAddress,
  };
};

export default useClientAddress;
