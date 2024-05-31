import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    const Headers = headers();
    const authData = await JSON.parse(Headers.get("authData")!);
    return NextResponse.json({
      message: "Welcome to admin dashboard",
      username: authData.username,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
