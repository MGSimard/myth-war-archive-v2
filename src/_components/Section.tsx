interface SectionProps extends React.ComponentProps<"section"> {
  children: React.ReactNode;
  heading?: string;
}

export function Section({ className, heading, children, ...props }: SectionProps) {
  return (
    <section className={className} {...props}>
      {heading && <h2 className="subheading">{heading}</h2>}
      <div className="section-content">{children}</div>
    </section>
  );
}
