import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = NextResponse.json(
      {
        message: "Logout successfully",
        success: true,
      },
      { status: 200 }
    );
    res.cookies.set("authToken", "", {
      httpOnly: true,
      secure: true,
      maxAge: 0,
    });
    return res;
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      { status: 500 }
    );
  }
}
