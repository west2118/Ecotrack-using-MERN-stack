import dbConnect from "@/lib/dbConnect";
import { adminAuth } from "@/lib/firebaseAdmin";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, email, firstName, lastName, country, goal, target } =
    await req.json();

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    await dbConnect();

    const user = await User.findOneAndUpdate(
      { uid: decoded.uid },
      {
        uid: decoded.uid,
        email: decoded.email || email,
        firstName,
        lastName,
        country,
        goal,
        target,
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
