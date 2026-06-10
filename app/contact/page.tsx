import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/lib/site-data";

export default function ContactPage({ searchParams }: { searchParams: { submitted?: string } }) {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Talk to Dante&apos;s Detailing.</h1>
          <p>Questions about services, vehicle condition, service area, or a future detail? Send a message and Dante&apos;s Detailing will follow up.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow split">
          <div>
            <h2>Serving {business.serviceArea}</h2>
            <p>Mobile detailing means the service comes to your driveway, workplace, or other convenient approved location.</p>
            <p>
              Need to get on the schedule now? Use the booking request flow so vehicle details, service choice, and preferred timing are captured together.
            </p>
            <Link className="button button-red" href="/book">
              Book Appointment
            </Link>
          </div>
          <div>
            {searchParams.submitted ? <div className="success-box">Message received. Dante&apos;s Detailing will follow up soon.</div> : null}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
