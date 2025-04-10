// Properly formatted Head component for Vike with canonical, robots, and Twitter tags
export default function Head() {
  // Get current URL to use for canonical links
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://webklar.de/pakete';
    
  return (
    <>
      <title>Pakete | Webklar - Transparente Preise ab 49 €</title>
      <meta name="description" content="Wähle das passende Webklar-Paket für deinen Webauftritt: Basic (49 €), Standard (149 €) oder Premium (249 €). Keine versteckten Kosten, keine Monatsgebühren." />
      <meta name="keywords" content="Webklar Pakete, Website Preise, Landingpage Kosten, günstige Website, Webdesign Paket" />
      
      {/* SEO tags */}
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Pakete & Preise | Webklar - Transparente Website-Pakete" />
      <meta property="og:description" content="Basic (49 €), Standard (149 €) oder Premium (249 €). Entdecke unsere transparenten Pakete für deine Landingpage." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Pakete & Preise | Webklar - Transparente Website-Pakete" />
      <meta name="twitter:description" content="Basic (49 €), Standard (149 €) oder Premium (249 €). Entdecke unsere transparenten Pakete für deine Landingpage." />
    </>
  )
}