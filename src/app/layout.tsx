import type { Metadata } from "next";
import "./globals.css";
import { Toast } from "@/utils/toast/Toast";
import ReduxProvider from "./Provider";
import TokenProvider from "./TokenProvider";
import { AOSInit } from "./Aos";
// import { ProtectedRoute } from "@/utils/routes/ProtectedRoutes";

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
          {/* <ProtectedRoute> */}
          <TokenProvider />
          <AOSInit />
          <Toast />
          {children}
          {/* </ProtectedRoute> */}

        </ReduxProvider>

      </body>
    </html>
  );
}
