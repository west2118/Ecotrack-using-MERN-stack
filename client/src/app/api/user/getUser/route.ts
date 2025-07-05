import dbConnect from "@/lib/dbConnect";
import { verifyToken } from "@/lib/middleware/verifyToken";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const result = await verifyToken(req);

  if (!result.success) return result.response;

  const { decoded } = result;

  try {
    await dbConnect();

    console.log("Decoded UID:", decoded.uid);

    const user = await User.findOne({ uid: decoded.uid });
    if (!user) {
      return NextResponse.json(
        { message: "User didn't exist" },
        { status: 400 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("SERVER ERROR:", error); // 🔥 LOG THE ERROR HERE
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
