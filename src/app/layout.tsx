import type { Metadata } from "next";
import Notification from "@/components/notification";
import ReactQueryProvider from "@/services/provider/react-query-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Glass Warehouse",
  description: "An online store for selling different parts of cars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ReactQueryProvider>{children}</ReactQueryProvider>
      <Notification />
      </body>
    </html>
  );
}
