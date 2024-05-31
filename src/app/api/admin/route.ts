import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Asset from "@/models/Asset";

export async function GET(req: NextRequest) {
  try {
    const Headers = headers();
    const authData = await JSON.parse(Headers.get("authData")!);
    const allAssets = await Asset.find({});
    return NextResponse.json({
      message: "Welcome to admin dashboard",
      username: authData.username,
      data: allAssets,
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
