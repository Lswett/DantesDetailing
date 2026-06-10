import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/site-data";

export default function ReviewsPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Customer trust</p>
          <h1>Reviews</h1>
          <p>Mock reviews for launch preview, structured so real customer testimonials can be managed later.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow">
          <SectionHeader title="What customers say" />
          <div className="card-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
          <div className="button-row">
            <Link className="button button-red" href="/book">
              Request a Quote
            </Link>
            <Link className="button button-ghost" href="/contact">
              Leave a Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
