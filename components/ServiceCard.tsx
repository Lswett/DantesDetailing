import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  service: {
    name: string;
    description: string;
    startingAt: number;
    duration: string;
    image: string;
    includes: string[];
  };
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="feature-card service-card">
      <Image src={service.image} alt={`${service.name} service`} width={720} height={480} />
      <div>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <p className="price">Starting at ${service.startingAt}</p>
        <p className="muted">Estimated duration: {service.duration}</p>
        <ul>
          {service.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link className="text-link" href={`/book?service=${encodeURIComponent(service.name)}`}>
          Book this service <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
