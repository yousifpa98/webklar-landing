// Properly formatted Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
  // Get current URL to use for canonical links
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://webklar.de/impressum';
    
  return (
    <>
      <title>Impressum | Webklar</title>
      <meta name="description" content="Rechtliche Informationen und Angaben gemäß § 5 TMG zu Webklar. Kontaktdaten und verantwortliche Personen." />
      
      {/* SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="noindex, follow" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Impressum | Webklar" />
      <meta property="og:description" content="Rechtliche Informationen und Angaben gemäß § 5 TMG zu Webklar." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Impressum | Webklar" />
      <meta name="twitter:description" content="Rechtliche Informationen und Angaben gemäß § 5 TMG zu Webklar." />
    </>
  )
}