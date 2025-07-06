import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await axios.post(
      "https://www.carboninterface.com/api/v1/estimates",
      {
        type: "electricity",
        electricity_unit: "mwh",
        electricity_value: body.watts,
        country: body.country,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CARBON_API}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch vehicle makes", detail: error.message },
      { status: 500 }
    );
  }
}
