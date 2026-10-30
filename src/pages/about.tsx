
import Link from "next/link";

export default function About() {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="font-bold uppercase tracking-widest text-orange-500">About Us</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Creativity That Brings Ideas to Life
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          TRV Print & Design helps individuals, businesses and organisations
          express their ideas through personalised printing, graphic design
          and branding solutions.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-100 p-8">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 leading-7 text-gray-600">
              To provide creative, practical and professional printing and
              design solutions that help our customers stand out.
            </p>
          </div>
          <div className="rounded-2xl bg-gray-100 p-8">
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-4 leading-7 text-gray-600">
              To become a trusted creative partner for individuals and
              businesses looking for quality printing and branding.
            </p>
          </div>
        </div>

        <Link
          href="/services"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 font-bold text-white hover:bg-orange-500"
        >
          Discover Our Services
        </Link>
      </div>
    </section>
  );
}
