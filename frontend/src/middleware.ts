import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/chat/:path*", "/", "/auth/login"],
};

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("AUTH_TOKEN");

  const isAuthPage = req.nextUrl.pathname === "/auth/login";

  const isHomePage = req.nextUrl.pathname === "/";

  if (cookie) {
    if (isAuthPage || isHomePage) {
      return NextResponse.redirect(new URL("/chat", req.url));
    }

    return NextResponse.next();
  }

  if (!isAuthPage) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}
