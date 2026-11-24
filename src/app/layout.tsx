import type { Metadata, Viewport } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource-variable/inter";
import "./globals.css";
import { SiteNav } from "@/components/nav/SiteNav";

export const metadata: Metadata = {
  title: {
    default: "Vishnu Kulkarni — AI Product Builder",
    template: "%s · Vishnu Kulkarni",
  },
  description:
    "Portfolio of Vishnu Kulkarni, an AI Product Builder working on agentic AI, full-stack engineering and SaaS products.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090d12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
