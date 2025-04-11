// Properly formatted Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
    // Get current URL to use for canonical links
    const currentUrl = typeof window !== 'undefined' 
      ? window.location.href 
      : 'https://webklar.app/about';
      
    return (
      <>
        <title>Über uns | Webklar - Keine Agentur, nur Resultate</title>
        <meta name="description" content="Webklar ist kein klassisches Webstudio, sondern Entwickler, Designer und Strategen mit klarer Mission: Landingpages, die nicht nur gut aussehen, sondern Ergebnisse liefern." />
        <meta name="keywords" content="Webklar, Über uns, Webdesign, Landingpage, Conversion, Entwicklung, Strategie" />
        
        {/* SEO tags */}
        <link rel="canonical" href={currentUrl} />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Über uns | Webklar - Keine Agentur, nur Resultate" />
        <meta property="og:description" content="Erfahre mehr über die Mission von Webklar: Landingpages, die verkaufen – in 48 Stunden." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Über uns | Webklar - Keine Agentur, nur Resultate" />
        <meta name="twitter:description" content="Erfahre mehr über die Mission von Webklar: Landingpages, die verkaufen – in 48 Stunden." />
      </>
    )
  }