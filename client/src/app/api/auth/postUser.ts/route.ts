import User from "@/app/models/user.model";
import dbConnect from "@/lib/dbConnect";
import { adminAuth } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { token, fullName, email, country, goal, target } = await req.json();

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    await dbConnect();

    const user = await User.findOneAndUpdate(
      { uid: decoded.uid },
      {
        uid: decoded.uid,
        fullName,
        email,
        country,
        goal,
        target,
      },
      { upsert: true, new: true }
    );

    return NextResponse.json(
      { message: "Logged in successfully!", user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
