/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SidenavContextProvider } from "@/_components/sidenav/SidenavProvider";
import { FixedTrigger } from "@/_components/sidenav/SidenavTriggerFixed";
import { Sidenav } from "@/_components/sidenav/Sidenav";
import { PageNotFound } from "@/_components/PageNotFound";
import { PageError } from "@/_components/PageError";
import { BASE_URL, SITE_AUTHOR, SITE_DESCRIPTION, SITE_TITLE } from "@/_utils/consts";
import appCss from "@/_styles/global.css?url";
import fontCss from "@/_styles/fonts.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: SITE_AUTHOR },
      { name: "application-name", content: SITE_TITLE },
      { name: "apple-mobile-web-app-title", content: SITE_TITLE },
      { name: "theme-color", content: "#003480" },
      { name: "color-scheme", content: "dark" },
      { name: "msapplication-TileColor", content: "#003480" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      // OPEN GRAPH / FACEBOOK
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_TITLE },
      { property: "og:url", content: BASE_URL },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:image", content: "/metadata/opengraph-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "600" },
      // TWITTER
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:site", content: SITE_AUTHOR },
      { property: "twitter:creator", content: SITE_AUTHOR },
      { property: "twitter:url", content: BASE_URL },
      { property: "twitter:title", content: SITE_TITLE },
      { property: "twitter:description", content: SITE_DESCRIPTION },
      { property: "twitter:image", content: "/metadata/twitter-image.png" },
    ],
    links: [
      { rel: "manifest", href: "/metadata/manifest.webmanifest" },
      { rel: "sitemap", href: "/sitemap.xml" },
      // RSS feed not needed (rss.xml)
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: fontCss },
      // FAVICONS
      { rel: "shortcut icon", href: "/metadata/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/metadata/icon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/metadata/apple-icon.png" },
      // No mask-icon due to lacking icon.svg
      // FONT PRELOADS
      {
        rel: "preload",
        href: "/fonts/hanyi-fanglijian/HanyiFanglijian.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/tangerine/tangerine-regular.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/zieruk/zieruk-trial.ttf",
        as: "font",
        type: "font/ttf",
        crossOrigin: "anonymous",
      },
      // CANONICAL URL
      { rel: "canonical", href: BASE_URL },
    ],
  }),
  notFoundComponent: () => <PageNotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <SidenavContextProvider>
        <FixedTrigger />
        <Sidenav />
        <div id="sidenav-inset">
          <main>
            <Outlet />
          </main>
        </div>
      </SidenavContextProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <div id="portal"></div>
        <Scripts />
      </body>
    </html>
  );
}
