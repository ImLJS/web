import { type NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const allowedOrigins = [process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /**
   * 🔹 Handle CORS for API routes
   * This allows cross-origin requests to the API endpoints.
   */
  if (pathname.startsWith("/api/")) {
    const origin = request.headers.get("origin") ?? "";
    const isAllowedOrigin = allowedOrigins.includes(origin);
    const isPreflight = request.method === "OPTIONS";

    if (isPreflight) {
      const preflightHeaders = {
        ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
        ...corsOptions,
      };
      return NextResponse.json({}, { headers: preflightHeaders });
    }

    const response = NextResponse.next();

    if (isAllowedOrigin) {
      response.headers.set("Access-Control-Allow-Origin", origin);
    }

    for (const [key, value] of Object.entries(corsOptions)) {
      response.headers.set(key, value);
    }

    return response;
  }

  /**
   * 🔹 Handle Admin routes → Auth
   */
  if (pathname.startsWith("/admin/")) {
    const cookies = getSessionCookie(request);
    if (!cookies) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

/**
 * 🔹 Match both API and Admin routes
 */
export const config = {
  matcher: ["/api/:path*", "/admin/:path*"],
};
