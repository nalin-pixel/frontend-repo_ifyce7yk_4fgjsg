import { PawPrint, Home, Heart, Calendar } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-900 font-semibold">
          <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 text-white shadow">
            <PawPrint size={20} />
          </div>
          <span className="text-lg">PetVerse</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#home" className="inline-flex items-center gap-1 hover:text-slate-900 transition"><Home size={18} /> Home</a>
          <a href="#services" className="hover:text-slate-900 transition">Services</a>
          <a href="#adopt" className="inline-flex items-center gap-1 hover:text-slate-900 transition"><Heart size={18} /> Adopt</a>
          <a href="#book" className="inline-flex items-center gap-1 hover:text-slate-900 transition"><Calendar size={18} /> Book</a>
        </nav>
        <a href="#book" className="ml-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800 transition">
          Book a Visit
        </a>
      </div>
    </header>
  );
}
