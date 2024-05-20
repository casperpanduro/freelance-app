"use client";
import Table from "@/components/ui/Table";
import useClients from "@/features/clients/hooks/useClients";
import ToggleCreateClientModal from "@/features/clients/component/ToggleCreateClientModal";
import { Client } from "@/features/clients/types";
import useClientAddress from "@/features/clients/hooks/useClientAddress";
import Link from "next/link";

const ClientsTable = () => {
  const { clients, loading, setSelectedClient } = useClients();
  const { getAddress } = useClientAddress();

  return (
    <Table
      emptyState={{
        title: "No clients yet",
        description: "Add your first client to get started.",
        createAction: <ToggleCreateClientModal />,
      }}
      loading={loading}
      headlines={["Name", "VAT", "Address"]}
      data={
        clients?.data.map((client: Client) => [
          <Link
            onClick={() => setSelectedClient(client)}
            href={`/admin/clients/${client.id}`}
            className={"font-semibold text-zinc-800"}
          >
            {client.company_name}
          </Link>,
          client.vat_number,
          getAddress(client),
        ]) ?? []
      }
    />
  );
};

export default ClientsTable;
