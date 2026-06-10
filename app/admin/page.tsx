const adminSections = [
  "Booking Requests",
  "Contact Messages",
  "Services",
  "Pricing",
  "Gallery",
  "Testimonials",
  "Membership Plans",
  "Site Settings",
];

export default function AdminPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Owner area</p>
          <h1>Admin Dashboard</h1>
          <p>
            Placeholder dashboard for a future CMS. Authentication, editing screens, image uploads, and owner workflows can be added here without changing the public site structure.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow">
          <div className="admin-grid">
            {adminSections.map((section) => (
              <article className="admin-card" key={section}>
                <span>Sample Section</span>
                <h3>{section}</h3>
                <p>Disabled until owner authentication and CMS controls are added.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
