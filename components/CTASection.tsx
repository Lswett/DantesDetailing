import Link from "next/link";

export function CTASection() {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">Ready for that fresh detailed feeling?</p>
        <h2>Book your mobile detail in Genesee County.</h2>
        <p>Pick the service, share your vehicle details, and Dante&apos;s Detailing will follow up to confirm timing.</p>
      </div>
      <Link className="button button-red" href="/book">
        Book Now
      </Link>
    </section>
  );
}
