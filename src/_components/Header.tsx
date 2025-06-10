export function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="header">
      <div className="header-header">
        <h1 className="heading">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}
