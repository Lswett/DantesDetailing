type GalleryItem = {
  title: string;
  category: string;
  beforeUrl?: string | null;
  afterUrl: string;
  alt: string;
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <article className="gallery-item" key={item.title}>
          <div className="gallery-template" aria-label={`${item.title} coming soon`}>
            <div className="template-panel">
              <span>Before</span>
              <strong>Photo Coming Soon</strong>
            </div>
            <div className="template-divider" aria-hidden="true" />
            <div className="template-panel template-panel-after">
              <span>After</span>
              <strong>Photo Coming Soon</strong>
            </div>
          </div>
          <div>
            <span>{item.category}</span>
            <h3>{item.title}</h3>
            <p>Real Dante&apos;s Detailing before and after photos will be added here once available.</p>
          </div>
        </article>
      ))}
    </div>
  );
}
