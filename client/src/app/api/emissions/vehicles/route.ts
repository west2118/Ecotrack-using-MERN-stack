import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://www.carboninterface.com/api/v1/vehicle_makes",
      {
        headers: {
          Authorization: `Bearer ${process.env.CARBON_API}`,
          "Content-Type": "application/json",
        },
      }
    );

    const models = response.data.map((item: any) => ({
      id: item.data.id,
      name: item.data.attributes.name,
    }));

    return NextResponse.json(models);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch vehicle makes", detail: error.message },
      { status: 500 }
    );
  }
}
