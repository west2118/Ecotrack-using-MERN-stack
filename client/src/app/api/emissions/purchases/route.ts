import { items, PurchaseCategory } from "@/constants/items";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { amount, category } = body;

  console.log(amount, category);

  try {
    const factor = items[category as PurchaseCategory];
    if (!factor) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 400 }
      );
    }

    const carbonKg = factor * amount;

    return NextResponse.json({ carbonKg }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch vehicle makes", detail: error.message },
      { status: 500 }
    );
  }
}
