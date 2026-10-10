import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Actress Gallery | My Favorite Actresses",
  description: "Browse and manage your favorite actresses with an elegant gallery interface.",
  keywords: ["actress", "gallery", "collection", "favorites", "pwa"],
  authors: [{ name: "Actress Gallery" }],
  applicationName: "Actress Gallery",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Actress Gallery",
  },
  icons: {
    icon: [
      { url: "/icons/icon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-1024.jpg", type: "image/jpeg", sizes: "1024x1024" },
      { url: "/icons/icon-1024.jpg", type: "image/jpeg", sizes: "512x512" },
      { url: "/icons/icon-1024.jpg", type: "image/jpeg", sizes: "192x192" },
    ],
    apple: [{ url: "/icons/icon-1024.jpg", sizes: "1024x1024", type: "image/jpeg" }],
    shortcut: ["/icons/icon.svg"],
  },
  openGraph: {
    title: "Actress Gallery",
    description: "Browse and manage your favorite actresses with an elegant gallery interface.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-1024.jpg" />
        <link rel="mask-icon" href="/icons/icon.svg" color="#6366f1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
