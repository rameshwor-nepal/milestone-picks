import type { Metadata } from "next";
import "./globals.css";
import { Toast } from "@/utils/toast/Toast";
import ReduxProvider from "./Provider";
import TokenProvider from "./TokenProvider";

export const metadata: Metadata = {
  title: "Milestone Picks",
  description: "Number one betting picks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <ReduxProvider>
          <TokenProvider>
            <Toast />
            {children}
          </TokenProvider>

        </ReduxProvider>

      </body>
    </html>
  );
}
