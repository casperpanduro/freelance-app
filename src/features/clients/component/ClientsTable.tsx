"use client";
import useClients from "@/features/clients/hooks/useClients";
import useClientAddress from "@/features/clients/hooks/useClientAddress";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { ListLoading } from "@/components/loading-states";

const ClientsTable = () => {
  const { clients, loading, setSelectedClient } = useClients();
  const { getAddress } = useClientAddress();

  if(loading) return (<ListLoading count={12} />);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Company</TableHead>
          <TableHead>VAT</TableHead>
          <TableHead>Address</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clients?.data?.map((client) => (
          <TableRow key={client.id}>
            <TableCell className="font-medium">{client.company_name}</TableCell>
            <TableCell>{client.vat_number}</TableCell>
            <TableCell>{`${client.address}, ${client.zip} ${client.city}`}</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          ))}
      </TableBody>
    </Table>

  );
};

export default ClientsTable;
