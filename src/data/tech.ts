/** Maps a technology name to its logo in /public/skills (only names with a logo). */
const techIcons: Record<string, string> = {
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "React": "react",
  "React Native": "react",
  "Next.js": "nextjs",
  "NestJS": "nestjs",
  "Node.js": "nodejs",
  "Express.js": "nodejs",
  "PostgreSQL": "postgresql",
  "Prisma": "prisma",
  "MongoDB": "mongodb",
  "Mongoose": "mongodb",
  "Docker": "docker",
  "Cloudflare": "cloudflare",
  "Cloudflare Pages": "cloudflare",
  "Cloudflare Pages Functions": "cloudflare",
  "Python": "python",
  "Flask": "python",
  "Socket.IO": "socketio",
};

export function techIcon(name: string): string | undefined {
  const slug = techIcons[name];
  return slug ? `/skills/${slug}.svg` : undefined;
}

export const coreStack = ["TypeScript", "NestJS", "Node.js", "PostgreSQL", "Prisma", "React", "Next.js", "React Native", "Docker", "Cloudflare"];
