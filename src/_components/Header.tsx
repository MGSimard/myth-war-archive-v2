export function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="content-header">
      <h1 className="heading">{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
