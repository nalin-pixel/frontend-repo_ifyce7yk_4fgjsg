import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AdoptGrid from "./components/AdoptGrid";
import BookingForm from "./components/BookingForm";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} PetVerse — All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#adopt" className="hover:text-slate-900">Adopt</a>
          <a href="#book" className="hover:text-slate-900">Book</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <AdoptGrid />
      <BookingForm />
      <Footer />
    </div>
  );
}
