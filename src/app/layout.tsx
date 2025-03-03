import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "@/redux/provider";
import Wrapper from "@/layout/wrapper";
import HeaderSix from "@/layout/header/header-six";
import FooterThree from "@/layout/footer/footer-three";

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
        <Providers>
          <Wrapper>
            <div className="main-page-wrapper">
              {/* header start */}
              <HeaderSix />
              {/* header end */}
              {children}
            </div>
            {/* footer start */}
            <FooterThree />
            {/* footer end */}
          </Wrapper>
        </Providers>
      </body>
    </html>
  );
}
