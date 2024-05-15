"use client";
import { useState } from "react";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import useAuth from "@/hooks/useAuth";
import useMiddleware from "@/hooks/useMiddleware";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: process.env.NEXT_PUBLIC_TEST_LOGIN || "",
    password: process.env.NEXT_PUBLIC_TEST_PASSWORD || "",
  });

  const { isAuthenticated } = useMiddleware();

  if (!isAuthenticated) {
    return redirect("/admin");
  }

  const { login } = useAuth({ redirectWhenLoggedIn: "/dashboard" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(form.email, form.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={"space-y-4"}>
        <TextInput
          type={"email"}
          name={"email"}
          value={form.email}
          id={"email"}
          label={"Email"}
          placeholder={"john@doe.com"}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <TextInput
          type={"password"}
          name={"password"}
          value={form.password}
          id={"password"}
          label={"Password"}
          placeholder={"********"}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button text={"Login"} />
      </div>
    </form>
  );
};

export default LoginForm;
