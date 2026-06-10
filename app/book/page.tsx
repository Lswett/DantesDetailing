import { BookingForm } from "@/components/BookingForm";
import { services } from "@/lib/site-data";

export default function BookPage({
  searchParams,
}: {
  searchParams: { submitted?: string; service?: string; membership?: string };
}) {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Book now</p>
          <h1>Request your mobile detail.</h1>
          <p>No payment is required today. Submit the request and Dante&apos;s Detailing will confirm price, timing, and location details.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow">
          {searchParams.submitted ? (
            <div className="success-box">
              Booking request received. Dante&apos;s Detailing will contact you to confirm the appointment.
            </div>
          ) : null}
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
