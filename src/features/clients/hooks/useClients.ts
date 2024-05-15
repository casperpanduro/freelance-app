import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import useSWR from "swr";
import { fetchClients } from "@/features/clients/clientSlice";

const useClients = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(
    (state) =>
      state.clients.status === "loading" || state.clients.status === "idle",
  );
  const fetcher = async () => {
    dispatch(fetchClients());
  };

  const { data, error } = useSWR("/clients", fetcher);

  return {
    clients: useAppSelector((state) => state.clients.items),
    loading,
  };
};

export default useClients;
