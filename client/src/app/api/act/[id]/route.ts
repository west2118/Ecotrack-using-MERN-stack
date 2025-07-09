import dbConnect from "@/lib/dbConnect";
import { verifyToken } from "@/lib/middleware/verifyToken";
import Act from "@/models/act.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

// test

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const result = await verifyToken(req);
  const body = await req.json();

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

    const act = await Act.findById(id);
    if (!act) {
      return NextResponse.json(
        { message: "Activity didn't exist" },
        { status: 400 }
      );
    }

    if (act.userUid.toString() !== decoded.uid) {
      return NextResponse.json(
        { message: "You dont have authorized in this activity" },
        { status: 400 }
      );
    }

    const updatedAct = await Act.findByIdAndUpdate(id, body, { new: true });

    return NextResponse.json(
      { message: "Activity updated successfully!", updatedAct },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
