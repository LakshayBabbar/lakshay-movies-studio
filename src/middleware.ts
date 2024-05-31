import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./utils/auth";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/admin")) {
    const authToken = request.cookies.get("authToken")?.value;
    const { payload, error } = await verifyToken(
      authToken!,
      process.env.ACCESS_SECRET_KEY!
    );
    if (error) {
      return NextResponse.json(
        {
          error: "User is not authorized",
          success: false,
        },
        { status: 401 }
      );
    }
    const headers = new Headers(request.headers);
    headers.set("authData", JSON.stringify(payload));
    const response = NextResponse.next({
      request: {
        headers,
      },
    });
    return response;
  }
}

export const config = {
  matcher: ["/api/admin/:path*"],
};
