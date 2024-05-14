import { NextRequest, NextResponse } from "next/server";
import ApiClient from "@/lib/ApiClient";
import { AxiosResponse } from "axios";

export async function POST(req: NextRequest, res: NextResponse) {
  const {
    accountName,
    name,
    email,
    password,
    password_confirmation,
    selectedPlan,
  } = await req.json();

  console.log("accountName", accountName);
  console.log("name", name);
  console.log("email", email);

  return await ApiClient()
    .post("/register-account", {
      team_name: accountName,
      name,
      email,
      password,
      password_confirmation,
      plan_id: selectedPlan,
    })
    .then((response: any) => {
      console.log("response", response);
      return new NextResponse(JSON.stringify(response.data), {
        headers: { "content-type": "application/json" },
      });
    })
    .catch((error) => {
      console.log("error", error.response);
      return new NextResponse(
        JSON.stringify({
          error: error.response.data.message,
        }),
        {
          headers: { "content-type": "application/json" },
          status: error.response.status ?? 400,
        },
      );
    });
}
