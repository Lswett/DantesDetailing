import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { DirectContactNotice } from "@/components/DirectContactNotice";
import { business } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Talk to Dante&apos;s Detailing.</h1>
          <p>Questions about services, vehicle condition, service area, or a future detail? Use the direct contact information below for now.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow split">
          <div>
            <h2>Serving {business.serviceArea}</h2>
            <p>Mobile detailing means the service comes to your driveway, workplace, or other convenient approved location.</p>
            <p>
              Need to get on the schedule now? The online booking flow is coming soon, so contact Dante directly for the fastest response.
            </p>
            <Link className="button button-red" href="/book">
              Book Appointment
            </Link>
          </div>
          <div>
            <DirectContactNotice />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
