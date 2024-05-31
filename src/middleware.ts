import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./utils/auth";

export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const { payload, error } = await verifyToken(
    authToken!,
    process.env.ACCESS_SECRET_KEY!
  );
  if (
    request.nextUrl.pathname.startsWith("/api/admin") ||
    request.nextUrl.pathname.startsWith("/admin")
  ) {
    if (error || !payload?.isAdmin) {
      if (request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      return NextResponse.json(
        {
          message: "User is not authorized",
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
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (!error) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }
  const headers = new Headers(request.headers);
  !error && headers.set("authData", JSON.stringify(payload));
  return NextResponse.next({
    request: {
      headers,
    },
  });
}

export const config = {
  matcher: ["/api", "/api/admin/:path*", "/admin", "/login"],
};
