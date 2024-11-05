import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "빈집콕",
  description: "빈집콕 설명",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
