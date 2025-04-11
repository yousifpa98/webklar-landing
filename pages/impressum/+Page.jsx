import { motion } from "framer-motion";
import { Copy, Check, Shield } from "lucide-react";
import { useEffect, useState } from "react";

export default function ImpressumPage() {
  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@webklar.app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    document.title = "Impressum | Webklar";
  }, []);
  
  return (
    <div className="px-4 py-20 max-w-3xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        {/* Header */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
          >
            <Shield className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>
          
          <motion.div 
            className="h-1 w-20 bg-blue-500 rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-400 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Rechtliche Informationen zu Webklar.
          </motion.p>
        </motion.div>
        
        {/* Content sections */}
        <div className="space-y-12 text-gray-300">
          <motion.section 
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white">Angaben gemäß § 5 TMG:</h2>
                <div className="space-y-1">
                  <p><strong>Yousif Paulus</strong></p>
                  <p>Graf-Adolf-Str. 2</p>
                  <p>51065 Köln</p>
                  <p>Deutschland</p>
                </div>
                
                <div className="pt-4 pb-2">
                  <p className="mb-2"><strong>E-Mail:</strong></p>
                  <div className="inline-flex items-center gap-2 bg-zinc-800/50 px-4 py-2 rounded-lg border border-zinc-700/50">
                    <span className="text-gray-300 select-none">
                      hello<span className="select-none text-gray-500"> [at] </span>webklar.app
                    </span>
                    <motion.button
                      onClick={copyEmail}
                      className="ml-2 text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied ? (
                        <motion.div 
                          className="flex items-center gap-1"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                        >
                          <Check className="w-4 h-4" />
                          <span>Kopiert</span>
                        </motion.div>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Kopieren</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 pt-4 border-t border-zinc-800">
                <h2 className="text-xl font-semibold text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                <div className="space-y-1">
                  <p><strong>Yousif Paulus</strong></p>
                  <p>Graf-Adolf-Str. 2</p>
                  <p>51065 Köln</p>
                </div>
              </div>
            </div>
          </motion.section>
          
          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedCard 
              title="Haftung für Inhalte" 
              content="Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehme ich jedoch keine Gewähr."
              delay={0.5}
            />
            
            <AnimatedCard 
              title="Haftung für Links" 
              content="Diese Website enthält ggf. Links zu externen Websites Dritter. Für die Inhalte dieser Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich."
              delay={0.6}
            />
            
            <AnimatedCard 
              title="Urheberrecht" 
              content="Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung."
              delay={0.7}
            />
          </div>
        </div>
        
        <motion.div 
          className="pt-8 mt-8 border-t border-zinc-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm text-gray-500">
            Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

function AnimatedCard({ title, content, delay = 0 }) {
  return (
    <motion.div 
      className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-lg h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}