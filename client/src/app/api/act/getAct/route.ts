import dbConnect from "@/lib/dbConnect";
import { verifyToken } from "@/lib/middleware/verifyToken";
import Act from "@/models/act.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await verifyToken(req);

  console.log("BODY: ", body.actId);

  if (!result.success) return result.response;

  const { decoded } = result;

  try {
    await dbConnect();

    const user = await User.findOne({ uid: decoded.uid });
    if (!user) {
      return NextResponse.json(
        { message: "User doesn't exist" },
        { status: 400 }
      );
    }

    const act = await Act.findById(body.actId);
    if (!act) {
      return NextResponse.json(
        { message: "Activity doesn't exist" },
        { status: 400 }
      );
    }

    if (act.userUid.toString() !== decoded.uid) {
      return NextResponse.json(
        { message: "You are not authorized for this activity" },
        { status: 403 }
      );
    }

    return NextResponse.json({ act }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
