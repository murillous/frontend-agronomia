"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LineChart,
  List,
  Server,
  Menu,
  X,
} from "lucide-react";
import clsx from "clsx";

const menuItems = [
  { icon: Server, label: "API", href: "/" },
  { icon: LayoutDashboard, label: "Painel", href: "/dashboard" },
  { icon: List, label: "Registros", href: "/registros" },
  { icon: LineChart, label: "Análises", href: "/analises" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <h1 className="text-lg font-bold text-emerald-600 tracking-tight">
            Ciclus
          </h1>
          <p className="text-[10px] text-slate-400 font-medium leading-none">
            Weather Station
          </p>
        </div>

        <button
          onClick={toggleMenu}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl flex flex-col p-2 animate-in slide-in-from-top-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
                className={clsx(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all mb-1",
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <item.icon size={20} />
                {item.label}
              </Link>
            );
          })}

          <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-400 text-center pb-2">
            v1.2.0 · Agronomia
          </div>
        </nav>
      )}
    </div>
  );
}
