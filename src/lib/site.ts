export function getSiteUrl(): URL {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;
    try {
      const url = new URL(value.includes("://") ? value : `https://${value}`);
      url.pathname = "";
      url.search = "";
      url.hash = "";
      return url;
    } catch {
      continue;
    }
  }

  return new URL("http://localhost:3000");
}
