type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
};

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  const parts = title.split(" ");
  const lastWord = parts.length > 2 ? parts.pop() : null;

  return (
    <div className="section-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>
        {lastWord ? (
          <>
            {parts.join(" ")} <span>{lastWord}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}
