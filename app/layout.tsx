import type { Metadata } from "next";
import "./globals.css";
import Splash from "@/app/component/common/splash";

export const metadata: Metadata = {
  title: "빈집콕",
  description: "빈집콕 설명",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ko">
      <body>
        <div className="common-layout">
          <Splash />
          {children}
        </div>
      </body>
    </html>
  );
}
