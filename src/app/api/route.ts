import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const Headers = headers();
    const authData = await JSON.parse(Headers.get("authData")!);
    console.log(authData);
    return NextResponse.json({
      message: "Welcome to Lakshay Movies Studio",
      username: (authData && authData.username) || undefined,
      isAdmin: (authData && authData.isAdmin) || false,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
