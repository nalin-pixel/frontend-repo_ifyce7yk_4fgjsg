import { Bath, Stethoscope, Scissors, Dog } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    desc: "Book health checkups, vaccinations, and tele-vet consultations.",
  },
  {
    icon: Scissors,
    title: "Grooming",
    desc: "Spa days, nail trim, coat styling — keep them fresh and happy.",
  },
  {
    icon: Bath,
    title: "Boarding",
    desc: "Safe, cozy stays with 24/7 care while you're away.",
  },
  {
    icon: Dog,
    title: "Training",
    desc: "Puppy basics to advanced obedience with certified trainers.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything your pet needs</h2>
        <p className="mt-2 text-slate-600 max-w-prose">One hub for care, comfort, and community. Browse our most-loved services.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 text-white flex items-center justify-center shadow">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              <button className="mt-4 text-sm font-medium text-pink-600 hover:text-pink-700">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
