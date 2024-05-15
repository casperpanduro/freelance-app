import { NextRequest, NextResponse } from "next/server";
import Server from "@/lib/Server";

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.json();

  const Api = Server();

  // csrf
  await Api.csrf();

  return await Api.createAccount(formData)
    .then((res) => {
      return new NextResponse(JSON.stringify(res.data), {
        headers: { "content-type": "application/json" },
      });
    })
    .catch((error) => {
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
