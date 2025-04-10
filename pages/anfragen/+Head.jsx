// Properly formatted Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
  // Get current URL to use for canonical links
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://webklar.de/anfragen';
    
  return (
    <>
      <title>Anfragen | Webklar - In 3 Minuten konfigurieren</title>
      <meta name="description" content="Konfiguriere in wenigen Minuten deine Website und erhalte ein passendes Angebot. Schnell, unkompliziert und ohne Verpflichtungen." />
      <meta name="keywords" content="Website anfragen, Angebot, Webseite konfigurieren, Landingpage bestellen, Webdesign Angebot" />
      
      {/* SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Anfragen | Webklar - Deine Website in 3 Minuten konfigurieren" />
      <meta property="og:description" content="Konfiguriere deine Website in nur wenigen Schritten und erhalte ein maßgeschneidertes Angebot von Webklar." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Anfragen | Webklar - Deine Website in 3 Minuten konfigurieren" />
      <meta name="twitter:description" content="Konfiguriere deine Website in nur wenigen Schritten und erhalte ein maßgeschneidertes Angebot von Webklar." />
    </>
  )
}