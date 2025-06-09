import { createFileRoute } from "@tanstack/react-router";
import { SidenavTrigger } from "@/_components/sidenav/SidenavTrigger";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>System Settings</h2>
    </div>
  );
}
