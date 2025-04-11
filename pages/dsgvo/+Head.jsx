// Properly formatted Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
  // Get current URL to use for canonical links
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://webklar.app/datenschutz';
    
  return (
    <>
      <title>Datenschutzerklärung | Webklar</title>
      <meta name="description" content="Informationen zum Datenschutz bei Webklar. Erfahre, wie deine Daten verarbeitet werden und welche Rechte du hast." />
      
      {/* SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="noindex, follow" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Datenschutzerklärung | Webklar" />
      <meta property="og:description" content="Informationen zum Datenschutz bei Webklar. Erfahre, wie deine Daten verarbeitet werden und welche Rechte du hast." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Datenschutzerklärung | Webklar" />
      <meta name="twitter:description" content="Informationen zum Datenschutz bei Webklar. Erfahre, wie deine Daten verarbeitet werden und welche Rechte du hast." />
    </>
  )
}