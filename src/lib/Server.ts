import axios from "axios";
import { CreateAccountFormState } from "@/components/forms/CreateAccountForm";

const Server = () => {
  const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 2000,
    withCredentials: true,
  });

  // Add a request interceptor
  client.interceptors.request.use(async (config) => {
    // try {
    //   const csrfResponse = await csrf();
    //   config.headers["X-CSRF-TOKEN"] = csrfResponse.data.csrf_token;
    // } catch (error) {
    //   console.error("Error fetching CSRF token:", error);
    //   throw new Error("Unable to fetch CSRF token");
    // }
    return config;
  });

  const csrf = async () => {
    return await client.get("/api/csrf-token");
  };

  const login = async (email: string, password: string) => {
    return await client.post("/login", { email, password });
  };

  const createAccount = async (data: CreateAccountFormState) => {
    return await client.post("/register-account", {
      team_name: data.accountName,
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
      plan_id: data.selectedPlan,
    });
  };

  const get = async (url: string, params?: object) => {
    return await client.get(url, { params });
  };

  const post = async (url: string, data?: object) => {
    return await client.post(url, data);
  };

  return {
    csrf,
    login,
    createAccount,
  };
};

export default Server;
