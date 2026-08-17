import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { AppProvider } from "@/components/app-provider";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "https://skillpilot.os";
  const title = "SkillPilot OS";
  const description = "A practical operating system for measurable, safe AI adoption at work.";
  return {
    title: { default: title, template: "%s · SkillPilot OS" },
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, type: "website", images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "SkillPilot OS — Make AI a team habit, not a side project." }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><AppProvider>{children}</AppProvider></body>
    </html>
  );
}
