import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4pWk-9hQCNhh-VMT/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 w-full">
        <div className="py-24">
          <span className="inline-flex items-center text-xs font-semibold tracking-wider uppercase bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-white/60 text-slate-700">All-in-one pet care</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
            The Super App for your
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent"> beloved pets</span>
          </h1>
          <p className="mt-4 text-slate-700 text-lg max-w-prose">
            Manage vet visits, grooming, adoptions, and community events — all in one delightful place.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#book" className="rounded-lg bg-slate-900 text-white px-5 py-3 text-sm shadow hover:bg-slate-800 transition">Book an appointment</a>
            <a href="#adopt" className="rounded-lg bg-white/80 backdrop-blur border border-white/60 text-slate-900 px-5 py-3 text-sm hover:bg-white transition">Find a friend</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white"></div>
    </section>
  );
}
