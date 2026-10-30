
import Link from "next/link";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
};

export default function ServicePage({
  eyebrow,
  title,
  description,
  benefits,
}: ServicePageProps) {
  return (
    <>
      <section className="bg-gray-950 px-5 py-24 text-white md:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-[0.25em] text-orange-400">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            {description}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-orange-500 px-7 py-3 font-bold hover:bg-orange-600"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black">What We Offer</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-gray-200 p-6"
              >
                <span className="font-bold text-orange-500">✓</span>
                <h3 className="mt-2 font-bold">{benefit}</h3>
              </div>
            ))}
          </div>
          <p className="mt-8 leading-7 text-gray-600">
            Have a specific idea or quantity in mind? Contact us to discuss
            your project, requirements and pricing.
          </p>
        </div>
      </section>
    </>
  );
}
