import dbConnect from "@/lib/dbConnect";
import { verifyToken } from "@/lib/middleware/verifyToken";
import Act from "@/models/act.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { category, activity, details, CO2, note, item } = await req.json();
  const result = await verifyToken(req);

  if (!result.success) return result.response;

  const { decoded } = result;

  console.log("Saving activity with item:", item);

  try {
    await dbConnect();

    const user = await User.findOne({ uid: decoded.uid });
    if (!user) {
      return NextResponse.json(
        { message: "User didn't exist" },
        { status: 400 }
      );
    }

    const newAct = new Act({
      userUid: decoded.uid,
      category,
      activity,
      details,
      CO2,
      note,
      ...(item ? { item } : {}),
    });
    await newAct.save();

    return NextResponse.json(
      { message: "Created activity successfully!", newAct },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
