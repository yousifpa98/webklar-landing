// Properly formatted Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
  // Get current URL to use for canonical links
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://webklar.app/kontakt';
    
  return (
    <>
      <title>Kontakt | Webklar - Fragen oder Projektanfragen</title>
      <meta name="description" content="Hast du Fragen zu unseren Leistungen oder möchtest ein Projekt besprechen? Kontaktiere Webklar für schnelle und professionelle Unterstützung." />
      <meta name="keywords" content="Webklar Kontakt, Website Anfrage, Landingpage Beratung, E-Mail, Anfrage stellen" />
      
      {/* SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Kontakt | Webklar - Fragen oder Projektanfragen" />
      <meta property="og:description" content="Kontaktiere Webklar für Fragen zu deinem Webprojekt oder für eine persönliche Beratung." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Kontakt | Webklar - Fragen oder Projektanfragen" />
      <meta name="twitter:description" content="Kontaktiere Webklar für Fragen zu deinem Webprojekt oder für eine persönliche Beratung." />
    </>
  )
}