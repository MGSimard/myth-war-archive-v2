import { ErrorComponent } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

export function PageError({ error, reset }: ErrorComponentProps) {
  return (
    <section id="system-notice">
      <div className="section-header">
        <h1 className="heading">System Notice [ERROR]</h1>
      </div>
      <div className="section-content">
        <img src="/assets/404.webp" alt="" aria-hidden="true" />
        <div id="system-message">
          <h2 className="label">An error occurred.</h2>
          <ErrorComponent error={error} />
        </div>
      </div>
    </section>
  );
}
