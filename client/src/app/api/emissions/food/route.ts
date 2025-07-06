import { foods, FoodType } from "@/constants/foods";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { food, grams } = body;

  try {
    const factor = foods[food as FoodType];
    if (!factor) {
      return NextResponse.json({ error: "Food not found" }, { status: 400 });
    }

    console.log(factor);

    const co2 = (grams / 100) * factor;

    return NextResponse.json({ co2 }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch vehicle makes", detail: error.message },
      { status: 500 }
    );
  }
}
