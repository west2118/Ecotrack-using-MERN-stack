import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const response = await axios.post(
      "https://www.carboninterface.com/api/v1/estimates",
      {
        type: "vehicle",
        distance_unit: "km",
        distance_value: body.distance,
        vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CARBON_API}`,
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
