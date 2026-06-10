import { CTASection } from "@/components/CTASection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main>
      <PageHero title="Services" copy="Data-driven service cards make it easy to add ceramic coatings, engine bay cleaning, fleet care, or seasonal packages later." />
      <section className="section">
        <div className="section-narrow">
          <SectionHeader eyebrow="Mobile detailing" title="Built around your vehicle." />
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}

function PageHero({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">Dante&apos;s Detailing</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}
