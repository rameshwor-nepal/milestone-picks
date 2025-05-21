import type { Metadata } from "next";
import "./globals.css";
import { Toast } from "@/utils/toast/Toast";
import ReduxProvider from "./Provider";
import TokenProvider from "./TokenProvider";
import { AOSInit } from "./Aos";
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-loading-skeleton/dist/skeleton.css'

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
          <TokenProvider />
          <AOSInit />
          <Toast />
          {children}

        </ReduxProvider>

      </body>
    </html>
  );
}
