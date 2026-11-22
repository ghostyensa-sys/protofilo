import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale } from "@/i18n/config";

function withLocale(request: NextRequest, locale: string) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1] ?? "";

  if (isLocale(first)) {
    return withLocale(request, first);
  }

  const url = request.nextUrl.clone();
  const looksLikeLocale = /^[a-z]{2}(?:-[a-z]{2})?$/i.test(first);

  if (looksLikeLocale) {
    const rest = pathname.split("/").slice(2).join("/");
    url.pathname = rest ? `/${defaultLocale}/${rest}` : `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  url.pathname =
    pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|icon|apple-icon|favicon.ico|.*\\..*).*)",
  ],
};
