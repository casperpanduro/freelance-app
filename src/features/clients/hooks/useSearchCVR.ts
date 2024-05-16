import cvrapi from "@/features/clients/lib/cvrapi";

const useSearchCVR = () => {
  const searchCVR = async (cvr: string) => {
    return await cvrapi().search(cvr);
  };

  return {
    searchCVR,
  };
};

export default useSearchCVR;
