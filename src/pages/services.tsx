
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    number: "01",
    title: "T-Shirt Printing",
    description: "Custom apparel for businesses, events, teams and personal gifts.",
    href: "/t-shirt-printing",
  },
  {
    number: "02",
    title: "Mug Printing",
    description: "Personalised mugs for gifts, promotions and everyday use.",
    href: "/mug-printing",
  },
  {
    number: "03",
    title: "Graphic Design",
    description: "Posters, flyers, digital graphics and marketing materials.",
    href: "/graphic-design",
  },
  {
    number: "04",
    title: "Branding",
    description: "Logo design and visual identity solutions for businesses.",
    href: "/branding",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-bold uppercase tracking-widest text-orange-500">
          Our Services
        </p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          Everything You Need to Stand Out
        </h1>
        <p className="mt-5 max-w-2xl leading-7 text-gray-600">
          Explore our printing, design and branding services. Contact us to
          discuss your requirements and request a quotation.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
