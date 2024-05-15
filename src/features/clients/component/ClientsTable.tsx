"use client";
import Table from "@/components/ui/Table";
import useClients from "@/features/clients/hooks/useClients";
import ToggleCreateClientModal from "@/features/clients/component/ToggleCreateClientModal";

const ClientsTable = () => {
  const { clients, loading } = useClients();
  return (
    <Table
      emptyState={{
        title: "No clients yet",
        description: "Add your first client to get started.",
        createAction: <ToggleCreateClientModal />,
      }}
      loading={loading}
      headlines={["Name", "VAT", "Address", "Contact person"]}
      data={[]}
    />
  );
};

export default ClientsTable;
