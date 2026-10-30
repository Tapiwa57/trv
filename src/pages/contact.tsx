
import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const service = String(form.get("service") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Website enquiry: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    );

    setSubmitted(true);
    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="bg-gray-50 px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-widest text-orange-500">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            Let's Create Something Great
          </h1>
          <p className="mt-5 leading-7 text-gray-600">
            Tell us about your printing, graphic design or branding project.
            Send us your requirements so we can discuss the next steps.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p><strong>Email:</strong> your-email@example.com</p>
            <p><strong>Phone:</strong> +263 XXX XXX XXX</p>
            <p><strong>Location:</strong> Zimbabwe</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-2 block text-sm font-bold">
              Service Required
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
            >
              <option value="" disabled>Select a service</option>
              <option>T-Shirt Printing</option>
              <option>Mug Printing</option>
              <option>Graphic Design</option>
              <option>Branding</option>
              <option>Other Enquiry</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-bold">
              Tell Us About Your Project
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
              placeholder="Describe what you need..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
          >
            Send Enquiry
          </button>

          {submitted && (
            <p className="text-sm text-gray-600">
              Your email app should open. Send the email there to complete your enquiry.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
