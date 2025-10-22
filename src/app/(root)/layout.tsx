import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen w-full h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
