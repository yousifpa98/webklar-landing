// Properly formatted Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
  // Get current URL to use for canonical links
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://webklar.de/404';
    
  return (
    <>
      <title>404 - Seite nicht gefunden | Webklar</title>
      <meta name="description" content="Die gesuchte Seite existiert nicht oder wurde verschoben. Kehre zur Startseite zurück oder kontaktiere uns für Hilfe." />
      
      {/* SEO tags - we don't want error pages indexed */}
      <meta name="robots" content="noindex, nofollow" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="404 - Seite nicht gefunden | Webklar" />
      <meta property="og:description" content="Die gesuchte Seite existiert nicht oder wurde verschoben." />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="404 - Seite nicht gefunden | Webklar" />
      <meta name="twitter:description" content="Die gesuchte Seite existiert nicht oder wurde verschoben." />
    </>
  )
}