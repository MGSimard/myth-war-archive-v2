export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="section-header">
        <h2 className="heading">{title}</h2>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
