import { BookingForm } from "@/components/BookingForm";
import { DirectContactNotice } from "@/components/DirectContactNotice";
import { services } from "@/lib/site-data";

export default function BookPage({
  searchParams,
}: {
  searchParams: { service?: string; membership?: string };
}) {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Book now</p>
          <h1>Request your mobile detail.</h1>
          <p>Online booking is coming soon. For now, use the direct contact information below to confirm price, timing, and location details.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow">
          <DirectContactNotice />
          <BookingForm
            services={services.map((service) => service.name)}
            selectedService={searchParams.service}
            membershipInterest={searchParams.membership === "1"}
          />
        </div>
      </section>
    </main>
  );
}
