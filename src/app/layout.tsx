import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "BayvueCorp",
  description: "BayvueCorp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
