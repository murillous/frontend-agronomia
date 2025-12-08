import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/components/Sidebar"; // Ajuste o caminho se necessário
import MobileNav from "@/app/components/MobileNav"; // IMPORTANTE: Importe o novo componente
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
        className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col md:flex-row h-screen overflow-hidden`}
      >
        <Sidebar />

        <MobileNav />

        <main className="flex-1 flex flex-col h-full overflow-y-auto relative w-full">
          <div className="flex-1 p-4 md:p-8">
            {" "}
            {children}
          </div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
