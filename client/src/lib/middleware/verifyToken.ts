import { NextResponse } from "next/server";
import { adminAuth } from "../firebaseAdmin";
import { DecodedIdToken } from "firebase-admin/auth";

type VerifyTokenResult =
  | { success: true; decoded: DecodedIdToken }
  | { success: false; response: ReturnType<typeof NextResponse.json> };

export async function verifyToken(req: Request): Promise<VerifyTokenResult> {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return {
      success: false,
      response: NextResponse.json(
        { success: "Missing or invalid Authorization header" },
        { status: 401 }
      ),
    };
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = await adminAuth.verifyIdToken(token);
    return { success: true, decoded };
  } catch (error) {
    return {
      success: false,
      response: NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      ),
    };
  }
}
