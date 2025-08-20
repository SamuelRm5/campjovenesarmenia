import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar({ site, navbar }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-gray-900/70 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 gap-6">
        <a
          href="#"
          style={{
            fontFamily: "Pacifico, sans-serif",
          }}
          className="flex items-center gap-3 text-2xl text-white"
        >
          <img
            src="/dark_logo.png"
            alt="Logo"
            className="h-16 w-auto rounded-sm shadow"
          />
          <span>{site.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 ml-auto">
          {navbar.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-emerald-200 hover:bg-emerald-500/15 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto md:ml-0 flex items-center gap-3">
          <a
            href="#inscripcion"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-white text-sm font-medium shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          >
            <Icon icon="mdi:rocket-launch" className="text-lg" />{" "}
            {navbar.ctaText}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-full bg-gray-800 text-gray-200"
          >
            <Icon icon={open ? "mdi:close" : "mdi:menu"} className="text-2xl" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-1 bg-gray-900/90 backdrop-blur border-b border-gray-800">
          {navbar.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-emerald-200 hover:bg-emerald-500/15 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inscripcion"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-3 rounded-xl bg-emerald-500/90 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-colors"
          >
            {navbar.ctaText}
          </a>
        </div>
      )}
    </header>
  );
}
