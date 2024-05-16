import { useState } from "react";
import TextInput from "@/components/ui/TextInput";
import AdminButton from "@/components/ui/AdminButton";
import useClients from "@/features/clients/hooks/useClients";
import useSearchCVR from "@/features/clients/hooks/useSearchCVR";

export interface CreateClientFormState {
  company_name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  vat_number: string;
  email: string;
  invoice_email: string;
  website: string;
}

const CreateClientForm = () => {
  const { create } = useClients();
  const { searchCVR } = useSearchCVR();
  const [search, setSearch] = useState<string>("");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await searchCVR(search).then((data) => {
      console.log(data);
    });
  };

  const [form, setForm] = useState<CreateClientFormState>({
    company_name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    vat_number: "",
    email: "",
    invoice_email: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await create(form).finally(() => {});
  };

  return (
    <div className={"space-y-6"}>
      <div>
        <h3 className={"text-lg font-semibold mb-4"}>Search by VAT</h3>
        <TextInput
          type={"text"}
          name={"search"}
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </div>
      <form onSubmit={handleSubmit}>
        <h3 className={"text-lg font-semibold mb-4"}>Enter manually</h3>
        <div className={"space-y-4"}>
          <TextInput
            type={"text"}
            name={"company_name"}
            value={form.company_name}
            onChange={handleChange}
            label={"Company Name"}
          />
          <TextInput
            type={"text"}
            name={"vat_number"}
            value={form.vat_number}
            onChange={handleChange}
            label={"VAT Number"}
          />
          <TextInput
            type={"text"}
            name={"address"}
            value={form.address}
            onChange={handleChange}
            label={"Address"}
          />
          <div className={"flex gap-x-2"}>
            <TextInput
              type={"text"}
              name={"city"}
              value={form.city}
              onChange={handleChange}
              label={"City"}
            />
            <TextInput
              type={"text"}
              name={"zip"}
              value={form.zip}
              onChange={handleChange}
              label={"Zip"}
            />
          </div>
          <AdminButton text={"Create Client"} type={"submit"} />
        </div>
      </form>
    </div>
  );
};

export default CreateClientForm;
