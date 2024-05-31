import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/User";
import { generateToken } from "@/utils/auth";
import { connectDB } from "@/app/config/db";
connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, password } = await reqBody;
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
          success: false,
        },
        { status: 404 }
      );
    }
    const isValid = await bcryptjs.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        {
          message: "Invalid Credentials",
          success: false,
        },
        { status: 401 }
      );
    }
    const token = await generateToken(
      { username, isAdmin: user.isAdmin },
      process.env.ACCESS_SECRET_KEY!
    );
    const res = NextResponse.json({
      message: "Logged in Successfully",
      isAdmin: user.isAdmin,
      success: true,
    });
    res.cookies.set("authToken", token.toString(), {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
    });
    return res;
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
