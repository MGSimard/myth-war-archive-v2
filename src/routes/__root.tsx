import { Outlet, createRootRoute } from "@tanstack/react-router";
import { SidenavContextProvider } from "@/_components/sidenav/SidenavProvider";
import { FixedTrigger } from "@/_components/sidenav/FixedTrigger";
import { Sidenav } from "@/_components/sidenav/Sidenav";

export const Route = createRootRoute({
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
