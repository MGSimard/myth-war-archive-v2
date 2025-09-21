interface SectionProps {
  title?: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id}>
      {title && <h2 className="heading">{title}</h2>}
      <div className="section-content">{children}</div>
    </section>
  );
}
