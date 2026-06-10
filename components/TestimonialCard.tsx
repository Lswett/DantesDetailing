import { Star } from "lucide-react";

type TestimonialCardProps = {
  testimonial: {
    name: string;
    vehicle: string;
    quote: string;
    rating: number;
  };
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="feature-card testimonial-card">
      <div className="stars" aria-label={`${testimonial.rating} star review`}>
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p>&ldquo;{testimonial.quote}&rdquo;</p>
      <strong>{testimonial.name}</strong>
      <span>{testimonial.vehicle}</span>
    </article>
  );
}
