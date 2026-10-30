
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  number: string;
};

export default function ServiceCard({
  title,
  description,
  href,
  number,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl"
    >
      <span className="text-sm font-bold text-orange-500">{number}</span>
      <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      <span className="mt-6 inline-block text-sm font-bold text-black group-hover:text-orange-500">
        Explore service →
      </span>
    </Link>
  );
}
