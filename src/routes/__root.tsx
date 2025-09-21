import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SidenavContextProvider } from "@/_components/sidenav/SidenavProvider";
import { FixedTrigger } from "@/_components/sidenav/SidenavTriggerFixed";
import { Sidenav } from "@/_components/sidenav/Sidenav";
import { PageNotFound } from "@/_components/PageNotFound";
import { PageError } from "@/_components/PageError";

export const Route = createRootRoute({
  notFoundComponent: () => <PageNotFound />,
  errorComponent: ({ error, reset }) => (
    <SidenavContextProvider>
      <FixedTrigger />
      <Sidenav />
      <div id="sidenav-inset">
        <main>
          <PageError error={error} reset={reset} />
        </main>
      </div>
    </SidenavContextProvider>
  ),
  component: () => (
    <SidenavContextProvider>
      <FixedTrigger />
      <Sidenav />
      <div id="sidenav-inset">
        <main>
          <Outlet />
        </main>
      </div>
    </SidenavContextProvider>
  ),
});
