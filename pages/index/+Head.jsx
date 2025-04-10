// Properly formatted Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
  // Get current URL to use for canonical links
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://webklar.de';
    
  return (
    <>
      <title>Webklar | Websites in 48 Stunden ohne Kompromisse</title>
      <meta name="description" content="Webklar liefert performante, moderne und SEO-optimierte Landingpages in nur 48 Stunden ab 49 €. Schluss mit Baukästen, hello Conversion!" />
      <meta name="keywords" content="Landingpage, Website, Webdesign, 48 Stunden, schnell, günstig, Köln, SEO" />
      
      {/* SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Webklar | Websites in 48 Stunden ohne Kompromisse" />
      <meta property="og:description" content="Performante, moderne und SEO-optimierte Landingpages in nur 48 Stunden ab 49 €." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Webklar | Websites in 48 Stunden ohne Kompromisse" />
      <meta name="twitter:description" content="Performante, moderne und SEO-optimierte Landingpages in nur 48 Stunden ab 49 €." />
    </>
  )
}