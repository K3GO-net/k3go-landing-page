"use client";

import "./globals.css";
import { DefaultLayout } from "@/src/layout/DefaultLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DefaultLayout children={children} />;
}
