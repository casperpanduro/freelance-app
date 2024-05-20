"use client";
import useClients from "@/features/clients/hooks/useClients";
import { useEffect } from "react";
import useHeadline from "@/hooks/useHeadline";
import useBreadcrumbs from "@/hooks/useBreadcrumbs";

const Client = ({}) => {
  const { selectedClient } = useClients();
  const { setHeadline } = useHeadline();
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setHeadline(selectedClient?.company_name);
    setBreadcrumbs([
      {
        label: "Clients",
        href: "/admin/clients",
      },
      {
        label: selectedClient?.company_name || "",
        href: `/admin/clients/${selectedClient?.id}`,
      },
    ]);
    return () => {
      setHeadline("");
      setBreadcrumbs([]);
    };
  }, [selectedClient]);

  return (
    <div>
      <h2>{selectedClient?.company_name}</h2>
    </div>
  );
};

export default Client;
