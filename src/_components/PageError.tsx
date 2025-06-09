import { Link, ErrorComponent } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";

export function PageError({ error, reset }: ErrorComponentProps) {
  return (
    <>
      <h1>ERROR</h1>
      <ErrorComponent error={error} />
      <Link to="/">
        <span>RETURN HOME</span>
      </Link>
    </>
  );
}
