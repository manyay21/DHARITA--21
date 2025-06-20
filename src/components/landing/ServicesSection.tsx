import { ServiceCard } from "./ServiceCard";
import { Building, ShieldCheck, HomeIcon } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "On Demand Construction",
    description:
      "Helps you build your dream home with the power of technology — from expert design to on-demand construction services, we connect you with trusted architects, engineers, and contractors, offer real-time progress updates, and ensure quality at every step, all through one seamless platform.",
    ctaLabel: "Inquire Construction Tech",
  },
  {
    icon: ShieldCheck,
    title: "Security+",
    description:
      "Revolutionize Residential Security with Smart Entry & Instant Emergency Alerts. Control Visitor Access and Protect Your Community with One Powerful App.",
    ctaLabel: "Discuss Security Solutions",
    link: "/design.html", // ✅ Link for "Learn More"
  },
  {
    icon: HomeIcon,
    title: "VR Space",
    description:
      "Immersive VR/AR tours and digital stagings that allow clients to experience properties remotely like never before.",
    ctaLabel: "Explore Virtual Tours",
    link: "/VRspace.html", // ✅ Link for "Learn More"
  },
];

interface ServicesSectionProps {
  onOpenContactModal: (serviceTitle: string) => void;
}

export function ServicesSection({ onOpenContactModal }: ServicesSectionProps) {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Our Premium Services
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprehensive solutions tailored to meet the diverse needs of the
            real estate industry with innovation and excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              ctaLabel={service.ctaLabel}
              onCtaClick={onOpenContactModal}
              link={service.link} // ✅ Pass the link here
            />
          ))}
        </div>
      </div>
    </section>
  );
}
