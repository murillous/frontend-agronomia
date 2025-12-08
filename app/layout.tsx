import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciclus Dashboard",
  description: "Monitoramento Agrícola de Precisão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 flex h-screen overflow-hidden`}
      >
        <Sidebar />

        <main className="flex-1 flex flex-col h-full overflow-y-auto relative">
          <div className="flex-1 p-8">{children}</div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
