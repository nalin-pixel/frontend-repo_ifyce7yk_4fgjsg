import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({ name: "", pet: "", service: "Vet Checkup", date: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // In a full app, this would call the backend. Here we just show success UI.
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Book a visit</h2>
          <p className="mt-2 text-slate-600 max-w-prose">Schedule vet checkups, grooming, or training in a few clicks. We'll send reminders and care tips ahead of time.</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• Real-time confirmations</li>
            <li>• Flexible rescheduling</li>
            <li>• SMS and email reminders</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {submitted ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700">✓</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Appointment requested</h3>
              <p className="mt-1 text-slate-600 text-sm">We'll follow up shortly with confirmation details.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Book another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Your name</label>
                <input name="name" required value={form.name} onChange={onChange} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-400 focus:ring-slate-400" placeholder="Alex" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Pet name</label>
                <input name="pet" required value={form.pet} onChange={onChange} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-400 focus:ring-slate-400" placeholder="Luna" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Service</label>
                  <select name="service" value={form.service} onChange={onChange} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-400 focus:ring-slate-400">
                    <option>Vet Checkup</option>
                    <option>Grooming</option>
                    <option>Training</option>
                    <option>Boarding</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Preferred date</label>
                  <input type="date" name="date" required value={form.date} onChange={onChange} className="mt-1 w-full rounded-lg border-slate-300 focus:border-slate-400 focus:ring-slate-400" />
                </div>
              </div>
              <button type="submit" className="w-full rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Request appointment</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
