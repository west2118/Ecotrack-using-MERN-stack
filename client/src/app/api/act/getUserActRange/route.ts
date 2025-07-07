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

    const url = new URL(req.url);
    const range = url.searchParams.get("range");

    const now = new Date();
    let start: Date, end: Date;

    if (range === "yesterday") {
      start = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() - 1,
          0,
          0,
          0
        )
      );
      end = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() - 1,
          23,
          59,
          59,
          999
        )
      );
    } else if (range === "weekly") {
      const dayOfWeek = now.getUTCDay(); // 0 (Sun) - 6 (Sat)
      const daysSinceMonday = (dayOfWeek + 6) % 7;

      start = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate() - daysSinceMonday,
          0,
          0,
          0
        )
      );
      end = now;
    } else {
      // Default to today
      start = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          0,
          0,
          0
        )
      );
      end = new Date(
        Date.UTC(
          now.getUTCFullYear(),
          now.getUTCMonth(),
          now.getUTCDate(),
          23,
          59,
          59,
          999
        )
      );
    }

    const items = await Act.find({
      createdAt: {
        $gte: start,
        $lte: end,
      },
      userUid: decoded.uid,
    });

    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
