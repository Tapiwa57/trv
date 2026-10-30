
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-5 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-black">
            TRV<span className="text-orange-500">.</span>
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
            Creative printing, graphic design and branding solutions for
            individuals and businesses.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
            <Link href="/about" className="hover:text-orange-500">About Us</Link>
            <Link href="/services" className="hover:text-orange-500">Our Services</Link>
            <Link href="/contact" className="hover:text-orange-500">Contact Us</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Get in Touch</h3>
          <p className="mt-3 text-sm text-gray-400">
            Email: your-email@example.com
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Phone: +263 XXX XXX XXX
          </p>
          <p className="mt-2 text-sm text-gray-400">Zimbabwe</p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TRV Print & Design. All rights reserved.
      </div>
    </footer>
  );
}
