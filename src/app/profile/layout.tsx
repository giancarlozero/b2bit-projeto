import type { Metadata } from "next";
import Header from "../ui/header";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
};

export default function HeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
