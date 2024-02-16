"use client";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { DefaultLayout } from "@/src/layout/DefaultLayout";
import { Provider } from "@/src/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <DefaultLayout children={children} />
        </Provider>
      </body>
    </html>
  );
}
