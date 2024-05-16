import ClientsTable from "@/features/clients/component/ClientsTable";
import SlideModal from "@/components/ui/Overlay";
import CreateClient from "@/features/clients/component/CreateClient";
import ToggleCreateClientModal from "@/features/clients/component/ToggleCreateClientModal";
import TableActions from "@/components/ui/TableActions";

const Clients = () => {
  return (
    <div>
      <TableActions create={<ToggleCreateClientModal />} />
      <ClientsTable />
      <CreateClient />
    </div>
  );
};

export default Clients;
