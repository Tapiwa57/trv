
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    number: "01",
    title: "T-Shirt Printing",
    description: "Custom printed T-shirts for individuals, teams, events and businesses.",
    href: "/t-shirt-printing",
  },
  {
    number: "02",
    title: "Mug Printing",
    description: "Personalised mugs for gifts, celebrations and corporate branding.",
    href: "/mug-printing",
  },
  {
    number: "03",
    title: "Graphic Design",
    description: "Creative designs for posters, flyers, social media and marketing.",
    href: "/graphic-design",
  },
  {
    number: "04",
    title: "Branding",
    description: "Build a consistent brand identity for your business or organisation.",
    href: "/branding",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-gray-950 px-5 py-24 text-white md:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Print · Design · Branding
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Your Ideas.
              <span className="block text-orange-500">Our Creativity.</span>
              Your Brand.
            </h1>
            <p className="mt-6 max-w-xl leading-7 text-gray-300">
              Make your ideas stand out with custom T-shirt printing, personalised
              mugs, professional graphic design and business branding.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white/40 px-6 py-3 font-bold transition hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex min-h-72 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-gray-800 to-black p-8">
            <div className="text-center">
              <p className="text-6xl font-black tracking-tight md:text-8xl">
                TRV<span className="text-orange-500">.</span>
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gray-300">
                Bring Your Ideas to Life
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-500">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl font-black text-gray-900 md:text-4xl">
                Services That Make You Stand Out
              </h2>
            </div>
            <Link href="/services" className="font-bold text-orange-600 hover:text-orange-700">
              View all services →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-500 px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-black md:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl">
          Tell us what you need, and let's bring your idea to life.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-lg bg-black px-7 py-3 font-bold text-white hover:bg-gray-800"
        >
          Start Your Project
        </Link>
      </section>
    </>
  );
}
