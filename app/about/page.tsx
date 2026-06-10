import Image from "next/image";
import Link from "next/link";
import { staticAssetPath } from "@/lib/site-settings";

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">About Dante&apos;s Detailing</p>
          <h1>Mobile care with a detailer&apos;s eye.</h1>
          <p>
            Dante&apos;s Detailing serves Genesee County with hardworking, enthusiast-level care for daily drivers, work trucks, sports cars, SUVs, and classics.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow split">
          <div>
            <h2>Premium care, brought to your location.</h2>
            <p>
              The business is built around doing the small things right: careful wash technique, clean interiors, restored headlights, respectful scheduling, and honest guidance about what each vehicle needs.
            </p>
            <p>
              Whether it is a commuter car that needs a reset, a truck that earns its dirt, or a classic that deserves extra patience, Dante&apos;s Detailing treats every vehicle like it matters.
            </p>
            <Link className="button button-red" href="/book">
              Book Now
            </Link>
          </div>
          <Image src={staticAssetPath("/images/hero-detailing.png")} alt="Dante's Detailing mobile auto care" width={900} height={620} />
        </div>
      </section>
    </main>
  );
}
