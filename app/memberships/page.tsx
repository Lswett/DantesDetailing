import { MembershipCard } from "@/components/MembershipCard";
import { SectionHeader } from "@/components/SectionHeader";
import { memberships } from "@/lib/site-data";

export default function MembershipsPage() {
  return (
    <main>
      <section className="page-hero">
        <div>
          <p className="eyebrow">Keep it clean all year long</p>
          <h1>Membership Plans</h1>
          <p>Monthly upkeep options for drivers who want their vehicle to stay clean without starting from zero every visit.</p>
        </div>
      </section>
      <section className="section">
        <div className="section-narrow">
          <SectionHeader title="Maintenance plans" copy="Request a plan and Dante's Detailing will confirm the schedule, vehicle fit, and exact monthly price." />
          <div className="two-grid">
            {memberships.map((plan) => (
              <MembershipCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
