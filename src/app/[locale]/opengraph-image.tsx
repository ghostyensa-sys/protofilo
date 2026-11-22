import { isLocale, type Locale } from "@/i18n/config";
import {
  renderShareImage,
  shareAlt,
  shareContentType,
  shareSize,
} from "@/lib/share-image";

export const alt = shareAlt;
export const size = shareSize;
export const contentType = shareContentType;
export const runtime = "nodejs";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  return renderShareImage(safeLocale);
}
