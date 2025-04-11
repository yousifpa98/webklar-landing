// Root-level Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
  // Get current URL to use for canonical links
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://webklar.app";

  return (
    <>
      <title>Webklar | Websites in 48 Stunden ohne Kompromisse</title>
      <meta
        name="description"
        content="Webklar liefert performante, moderne und SEO-optimierte Landingpages in nur 48 Stunden ab 49 €."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />

      {/* SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />

      {/* Social media tags */}
      <meta property="og:site_name" content="Webklar" />
      <meta
        property="og:title"
        content="Webklar | Websites in 48 Stunden ohne Kompromisse"
      />
      <meta
        property="og:description"
        content="Webklar liefert performante, moderne und SEO-optimierte Landingpages in nur 48 Stunden ab 49 €."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Webklar | Websites in 48 Stunden ohne Kompromisse"
      />
      <meta
        name="twitter:description"
        content="Webklar liefert performante, moderne und SEO-optimierte Landingpages in nur 48 Stunden ab 49 €."
      />

      {/* Favicon */}
      <link rel="icon" href="/logo.png" />

      {/* Satsu */}
      <script
        src="https://cdn.yousifpaulus.dev/tracker.js"
        data-site="ED1JgjqjRV"
      ></script>
    </>
  );
}
