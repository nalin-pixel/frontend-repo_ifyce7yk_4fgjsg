import { Heart } from "lucide-react";

const pets = [
  { id: 1, name: "Luna", type: "Cat", age: "2y", img: "https://images.unsplash.com/photo-1596854307943-279a8f1142f9?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Buddy", type: "Dog", age: "1y", img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Milo", type: "Dog", age: "3y", img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Nala", type: "Cat", age: "6m", img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop" },
];

export default function AdoptGrid() {
  return (
    <section id="adopt" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Adopt a new best friend</h2>
            <p className="mt-2 text-slate-600">Real-time listings from verified shelters and rescues.</p>
          </div>
          <a href="#book" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm shadow hover:bg-slate-800 transition">
            <Heart size={16} /> Start Application
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pets.map((p) => (
            <div key={p.id} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute top-3 left-3 bg-white/80 backdrop-blur px-2 py-1 rounded-md text-xs font-medium text-slate-700 border border-white/70">
                  {p.type} • {p.age}
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-600">Ready to go home</p>
                </div>
                <button className="inline-flex items-center gap-1 text-sm text-pink-600 hover:text-pink-700">
                  <Heart size={16} /> Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
