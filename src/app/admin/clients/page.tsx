import ClientsTable from "@/features/clients/component/ClientsTable";
import SlideModal from "@/components/ui/Overlay";
import CreateClient from "@/features/clients/component/CreateClient";

const Clients = () => {
  return (
    <div>
      <ClientsTable />
      <CreateClient />
    </div>
  );
};

export default Clients;
