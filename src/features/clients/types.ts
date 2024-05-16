export interface Client {
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

export interface ClientPayload {
  data: Client[];
}
