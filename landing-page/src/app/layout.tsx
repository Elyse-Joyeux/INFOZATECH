import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umucyo Ai - Critical Thinking, Cultivated",
  description: "Enhance your reasoning, not just your answers. Empowering Rwandan students.",
  icons: {
    icon: "/umucyo-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
