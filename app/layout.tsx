import type { Metadata } from "next";
import "./css/screen.css";

export const metadata: Metadata = {
  title: "Hey Exit",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
