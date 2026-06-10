import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/site-data";

export default function PricingPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Starting at</p>
          <h1>Pricing</h1>
          <p>
            Clear starter pricing for Genesee County mobile detailing. Final pricing is confirmed after vehicle details and condition are reviewed.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow">
          <SectionHeader title="Starter pricing" />
          <div className="card-grid">
            {services.map((service) => (
              <article className="feature-card membership-card" key={service.slug}>
                <p className="eyebrow">{service.name}</p>
                <h3>${service.startingAt}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link className="button button-red" href={`/book?service=${encodeURIComponent(service.name)}`}>
                  Book Now
                </Link>
              </article>
            ))}
          </div>
          <p>
            Final price may vary based on vehicle size, condition, pet hair, stains, heavy debris, travel distance, and requested add-ons.
          </p>
        </div>
      </section>
    </main>
  );
}
