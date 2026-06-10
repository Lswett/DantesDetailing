import Link from "next/link";

type MembershipCardProps = {
  plan: {
    name: string;
    description: string;
    startingAt: number;
    interval: string;
    includes: string[];
  };
};

export function MembershipCard({ plan }: MembershipCardProps) {
  return (
    <article className="feature-card membership-card">
      <p className="eyebrow">{plan.name}</p>
      <h3>
        ${plan.startingAt}<span>/{plan.interval}</span>
      </h3>
      <p>{plan.description}</p>
      <ul>
        {plan.includes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className="button button-red" href="/book?membership=1">
        Request Plan
      </Link>
    </article>
  );
}
