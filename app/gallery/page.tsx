import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { galleryImages } from "@/lib/site-data";

export default function GalleryPage() {
  const categories = ["Exterior", "Interior", "Headlights", "Trucks", "Classics"];

  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Coming soon</p>
          <h1>Gallery</h1>
          <p>Before and after photos are not available yet. This page is ready for real Dante&apos;s Detailing results once the first photo set is collected.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow">
          <div className="vehicle-tabs">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <SectionHeader title="Before and after templates" />
          <GalleryGrid items={galleryImages} />
        </div>
      </section>
    </main>
  );
}
