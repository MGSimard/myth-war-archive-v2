import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Section({ title, children, as: Heading = "h2" }: SectionProps) {
  return (
    <section>
      <div className="section-header">
        <Heading className="heading">{title}</Heading>
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
