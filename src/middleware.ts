
import { NextResponse, type NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  // Keep logged-in users off public pages
  // if (isLoggedIn && isPublic(pathname) && !pathname.startsWith(AUTH_REDIRECT)) {
  //   const url = req.nextUrl.clone();
  //   url.pathname = AUTH_REDIRECT;
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};