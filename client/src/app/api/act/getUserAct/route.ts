import dbConnect from "@/lib/dbConnect";
import { verifyToken } from "@/lib/middleware/verifyToken";
import Act from "@/models/act.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const result = await verifyToken(req);

  if (!result.success) return result.response;

  const { decoded } = result;

  try {
    await dbConnect();

    const user = await User.findOne({ uid: decoded.uid });
    if (!user) {
      return NextResponse.json(
        { message: "User didn't exist" },
        { status: 400 }
      );
    }

    const items = await Act.find({ userUid: decoded.uid }).sort({
      createdAt: -1,
    });

    if (!items) return;

    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
