import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";

export default function KontaktPage() {
  useEffect(() => {
    document.title = "Kontakt | Webklar - Fragen oder Projektanfragen";
  }, []);
  return (
    <div className="px-4 py-24 max-w-4xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Kontakt<span className="text-blue-500">.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Hast du Fragen oder möchtest ein Projekt besprechen? 
            Nutze gerne eine der folgenden Kontaktmöglichkeiten.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8">
          <ContactCard 
            icon={<Mail className="w-6 h-6 text-blue-400" />}
            title="Email"
            description="Wir antworten in der Regel innerhalb von 24 Stunden."
          >
            <BotSafeEmail email="hello@webklar.app" />
          </ContactCard>

          <ContactCard 
            icon={<MapPin className="w-6 h-6 text-blue-400" />}
            title="Standort"
            description="Wir arbeiten remote aus ganz Deutschland."
          >
            <p className="text-gray-300">
              Deutschland
            </p>
          </ContactCard>
        </div>

        {/* Privacy Note */}
        <div className="text-center text-sm text-gray-500 max-w-lg mx-auto">
          <p>
            Deine Daten werden gemäß unserer <a href="/datenschutz" className="text-blue-400 hover:underline">Datenschutzerklärung</a> behandelt. 
            Wir verwenden deine Informationen nur zur Beantwortung deiner Anfrage.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function BotSafeEmail({ email }) {
  const [copied, setCopied] = useState(false);
  
  // Split email to make it harder for bots to scrape
  const [username, domain] = email.split('@');
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <span className="text-gray-300 select-none">
          {username}
          <span className="select-none text-gray-500"> [at] </span>
          {domain}
        </span>
      </div>
      
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            <span>Kopiert!</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>In Zwischenablage kopieren</span>
          </>
        )}
      </button>
    </div>
  );
}

function ContactCard({ icon, title, description, children }) {
  return (
    <motion.div 
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 h-full"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="space-y-6">
        <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
          {icon}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        
        <div className="pt-2">
          {children}
        </div>
      </div>
    </motion.div>
  );
}