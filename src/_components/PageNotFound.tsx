export function PageNotFound() {
  return (
    <section id="system-notice">
      <div className="section-header">
        <h1 className="heading">System Notice [404]</h1>
      </div>
      <div className="section-content">
        <img src="/assets/404.webp" alt="" aria-hidden="true" />
        <div id="system-message">
          <h2>The page you are looking for does not exist.</h2>
        </div>
      </div>
    </section>
  );
}
