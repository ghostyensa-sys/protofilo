import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export async function getRequestLocale(): Promise<Locale> {
  try {
    const headerStore = await headers();
    const value = headerStore.get("x-locale");
    if (value && isLocale(value)) return value;
  } catch {
    // Static generation has no request headers.
  }

  return defaultLocale;
}
