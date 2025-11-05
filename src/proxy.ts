import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/sponsor") {
    return NextResponse.redirect(new URL("/sponsor/event", request.url));
  }
  return;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
