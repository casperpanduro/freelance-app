import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import useSWR, { mutate } from "swr";
import { fetchClients } from "@/features/clients/clientSlice";
import CreateClientForm, {
  CreateClientFormState,
} from "@/features/clients/component/CreateClientForm";
import api from "@/lib/api";

const useClients = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(
    (state) =>
      state.clients.status === "loading" || state.clients.status === "idle",
  );
  const status = useAppSelector((state) => state.clients.status);
  const fetcher = async () => {
    if (status !== "succeeded") {
      dispatch(fetchClients());
    }
  };

  const create = async (data: CreateClientFormState) => {
    const response = await api.post("/api/clients", data);

    if (response.status === 201) {
      await mutate("/clients");
    }
  };

  const { data, error } = useSWR("/clients", fetcher);

  return {
    clients: useAppSelector((state) => state.clients.items),
    create,
    loading,
  };
};

export default useClients;
