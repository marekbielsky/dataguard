/* CI_CD_VERIFY */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataGuard — ocena jakości danych dla AI",
  description:
    "Statyczne demo platformy DataGuard: ocena i zarządzanie jakością danych dla systemów AI i analitycznych.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
