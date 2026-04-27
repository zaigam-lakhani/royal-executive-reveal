import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-8xl text-gradient-gold">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-ivory">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-luxury shadow-gold"
            style={{ background: "var(--gradient-gold)", color: "var(--charcoal)" }}
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Synaps Group — Royal Executive Holding" },
      {
        name: "description",
        content:
          "Synaps Group is a private royal executive holding stewarding capital, enterprises and legacies across continents.",
      },
      { name: "author", content: "Synaps Group" },
      { property: "og:title", content: "Synaps Group — Royal Executive Holding" },
      { property: "og:description", content: "Royal Crown Design transforms the Synaps Group website into a premium, luxury investment holding company theme." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Synaps Group — Royal Executive Holding" },
      { name: "description", content: "Royal Crown Design transforms the Synaps Group website into a premium, luxury investment holding company theme." },
      { name: "twitter:description", content: "Royal Crown Design transforms the Synaps Group website into a premium, luxury investment holding company theme." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a6c1ab94-f522-4e48-b21f-4181c558c182/id-preview-5ee99836--36ee4ab1-df9b-4ac1-af77-fd78d6f6dc26.lovable.app-1777297304665.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a6c1ab94-f522-4e48-b21f-4181c558c182/id-preview-5ee99836--36ee4ab1-df9b-4ac1-af77-fd78d6f6dc26.lovable.app-1777297304665.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
