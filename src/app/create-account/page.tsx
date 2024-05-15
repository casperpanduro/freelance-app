import Logo from "@/components/ui/Logo";
import Header from "@/components/partials/Header";
import React from "react";
import CreateAccountForm from "@/components/forms/CreateAccountForm";

const CreateAccount = () => {
  return (
    <>
      <Header />
      <main className={"py-12 mt-28"}>
        <div className={"max-w-2xl mx-auto px-6 space-y-12"}>
          <div className={"flex justify-center"}>
            <Logo className={"w-20 h-20"} />
          </div>
          <h1 className={"text-6xl font-bold text-center"}>Create account</h1>
          <div className={""}>
            <div className={"mb-4"}>
              <h2 className={"text-4xl font-semibold text-left"}>
                Fill in your details
              </h2>
            </div>
            <CreateAccountForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateAccount;
