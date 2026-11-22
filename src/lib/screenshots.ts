import fs from "node:fs";
import path from "node:path";

export function existingScreenshots<T extends { src: string }>(shots: T[]): T[] {
  const root = path.join(process.cwd(), "public");

  return shots.filter((shot) => {
    const relative = shot.src.replace(/^\/+/, "");
    if (!relative || relative.includes("..")) return false;
    return fs.existsSync(path.join(root, relative));
  });
}
