import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json({
      message: "Welcome to Lakshay Movies Studio",
      success: true,
    });
  } catch (error: any) {
    
  }
}
