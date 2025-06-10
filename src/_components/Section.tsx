interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({ title, children, id }: SectionProps) {
  return (
    <section id={id}>
      <div className="section-header">
        <h2 className="heading">{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
