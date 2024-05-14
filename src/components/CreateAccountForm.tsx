"use client";
import TextInput from "@/components/ui/TextInput";
import siteConfig, { PlanPaymentOption } from "../../site.config";
import useMoneyFormat from "@/hooks/useMoneyFormat";
import { FormEvent, useEffect, useState } from "react";

interface CreateAccountFormState {
  accountName: string;
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  selectedPlan: string;
}

const CreateAccountForm = () => {
  const { toMoney } = useMoneyFormat();

  const [form, setForm] = useState<CreateAccountFormState>({
    accountName: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    selectedPlan: siteConfig.plans[0].id,
  });

  const [activeTab, setActiveTab] = useState<PlanPaymentOption>("monthly");

  useEffect(() => {
    // @ts-ignore
    setForm((prev) => ({
      ...prev,
      selectedPlan: siteConfig.plans.find((plan) => plan.type === activeTab)
        ?.id,
    }));
  }, [activeTab]);

  const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/api/create-account", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.redirect) {
          window.location.href = data.redirect;
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmission}>
      <div className={"space-y-4"}>
        <TextInput
          label={"Team name"}
          value={form.accountName}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, accountName: e.target.value }))
          }
          placeholder={"El presidente's team"}
          name={"accountName"}
          type={"text"}
        />
        <TextInput
          label={"Your name"}
          value={form.name}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder={"George W. Bush"}
          name={"name"}
          type={"text"}
        />
        <TextInput
          label={"Email"}
          placeholder={"bush@acme.co"}
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
          name={"email"}
          type={"email"}
        />
        <TextInput
          label={"Password"}
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder={"***"}
          name={"password"}
          type={"password"}
        />
        <TextInput
          label={"Confirm password"}
          value={form.password_confirmation}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              password_confirmation: e.target.value,
            }))
          }
          placeholder={"***"}
          name={"password_confirmation"}
          type={"password"}
        />
      </div>
      <div className={"mb-4 mt-12"}>
        <h2 className={"text-4xl font-semibold text-left"}>Choose plan</h2>
      </div>
      <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800 mb-4">
        <button
          onClick={() => setActiveTab("monthly")}
          type="button"
          className={`relative w-1/2 ${activeTab === "monthly" ? "bg-zinc-700 text-white" : "text-zinc-400"} border-zinc-800 shadow-sm text-white rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:px-8`}
        >
          Monthly billing
        </button>
        <button
          onClick={() => setActiveTab("yearly")}
          type="button"
          className={`ml-0.5 relative gap-x-2 inline-flex justify-center items-center w-1/2 border border-transparent rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:px-8 ${activeTab === "yearly" ? "bg-zinc-700 text-white" : "text-zinc-400"}`}
        >
          <span>Yearly billing</span>
          <span
            className={"bg-pink-600 text-xs text-white px-2 py-1 rounded-full"}
          >
            Save 16%
          </span>
        </button>
      </div>
      <ul
        className={
          "flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center text-xl sm:text-2xl my-6"
        }
      >
        <li className={"flex items-center gap-x-1"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 sm:w-8 h-6 sm:h-8"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <span>30 days free trial</span>
        </li>
        <li className={"flex items-center gap-x-1"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 sm:w-8 h-6 sm:h-8"
          >
            <path
              fillRule="evenodd"
              d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <span>You can cancel anytime</span>
        </li>
      </ul>
      <div className={"space-y-2"}>
        {siteConfig.plans
          .filter((plan) => plan.type == activeTab)
          .map((plan, index) => {
            const selected = plan.id === form.selectedPlan;
            return (
              <div key={index} className={"flex items-center"}>
                <input
                  type={"radio"}
                  name={"plan"}
                  id={plan.id}
                  value={plan.id}
                  className={"sr-only"}
                />
                <label
                  htmlFor={plan.id}
                  onClick={() =>
                    setForm((prev) => ({ ...prev, selectedPlan: plan.id }))
                  }
                  className={`text-lg w-full items-center cursor-pointer ${!selected && "hover:border-white"} transition-colors duration-200 ${selected ? "border-pink-700" : "border-zinc-600"} border p-3 rounded-lg flex justify-between`}
                >
                  <div
                    className={`w-6 h-6 mr-4 rounded-full border flex items-center justify-center ${selected ? "bg-pink-600 border-pink-600" : "border-zinc-600"}`}
                  >
                    {selected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    )}
                  </div>
                  <div className={"flex justify-between w-full"}>
                    <div>
                      <p className={"text-xl font-semibold"}>{plan.title}</p>
                      <p className={"text-zinc-400"}>{plan.description}</p>
                    </div>
                    <div className={"gap-x-1"}>
                      <span className={"text-xl font-semibold"}>
                        {toMoney(plan.price)}
                      </span>
                      <br />
                      <span
                        className={
                          "text-base ml-1 block text-right -mt-1 text-zinc-400"
                        }
                      >
                        / month
                      </span>
                    </div>
                  </div>
                </label>
              </div>
            );
          })}
      </div>
      <button
        type={"submit"}
        className={
          "px-8 py-4 bg-pink-600 text-white font-medium text-xl w-full mt-12"
        }
      >
        Proceed to checkout
      </button>
    </form>
  );
};

export default CreateAccountForm;
