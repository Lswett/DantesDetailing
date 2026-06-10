import Image from "next/image";
import Link from "next/link";
import { Car, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { MembershipCard } from "@/components/MembershipCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { business, galleryImages, memberships, services, testimonials, vehicleCategories } from "@/lib/site-data";
import { staticAssetPath } from "@/lib/site-settings";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image">
          <Image src={staticAssetPath("/images/hero-detailing.png")} alt="Detailed sports car and truck" fill priority sizes="100vw" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">{business.serviceArea} mobile detailing</p>
          <h1 className="hero-title" aria-label="Detailing Done Right. At Your Location.">
            <span className="hero-title-main">Detailing</span>
            <span className="hero-title-red">Done Right.</span>
            <span className="hero-title-sub">At Your Location.</span>
          </h1>
          <p>
            Premium care for cars, trucks, SUVs, classics, and daily drivers without making you leave the driveway.
          </p>
          <div className="hero-actions">
            <Link className="button button-red" href="/book">
              Book Now
            </Link>
            <Link className="button button-ghost" href="/services">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <div className="trust-band">
        <TrustItem icon={<Truck />} title="Mobile Service" copy="We come to you" />
        <TrustItem icon={<Sparkles />} title="Premium Products" copy="Top-tier results" />
        <TrustItem icon={<ShieldCheck />} title="Satisfaction Guarantee" copy="We're not done until you're happy" />
      </div>

      <section className="section">
        <div className="section-narrow">
          <SectionHeader title="Detailing for every drive." />
          <div className="vehicle-tabs">
            {vehicleCategories.map((category) => (
              <span key={category}>
                <Car size={15} />
                {category}
              </span>
            ))}
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-narrow">
          <SectionHeader eyebrow="Coming Soon" title="Before and after preview" />
          <GalleryGrid items={galleryImages.slice(0, 3)} />
        </div>
      </section>

      <section className="section">
        <div className="section-narrow">
          <SectionHeader eyebrow="Keep it clean all year long" title="Membership plans" />
          <div className="two-grid">
            {memberships.map((plan) => (
              <MembershipCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-narrow">
          <SectionHeader eyebrow="Customer Reviews" title="What our customers say" />
          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

function TrustItem({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="trust-item">
      {icon}
      <div>
        <strong>{title}</strong>
        <p>{copy}</p>
      </div>
    </div>
  );
}
