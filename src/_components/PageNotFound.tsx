import { Link } from "@tanstack/react-router";

export function PageNotFound() {
  return (
    <>
      <h1>NOT FOUND</h1>
      <Link to="/">
        <span>RETURN HOME</span>
      </Link>
    </>
  );
}
