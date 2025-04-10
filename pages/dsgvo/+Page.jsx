import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Copy, 
  Check, 
  Lock, 
  Server, 
  MousePointer, 
  Mail, 
  Cookie, 
  Search, 
  MessageSquare,
  ShieldCheck,
  FileText
} from "lucide-react";

export default function DatenschutzPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText("hello@webklar.de");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // List of sections for navigation and content
  const sections = [
    { id: "verantwortlicher", title: "Verantwortlicher", icon: <Lock /> },
    { id: "hosting", title: "Hosting", icon: <Server /> },
    { id: "zugriffsdaten", title: "Zugriffsdaten", icon: <MousePointer /> },
    { id: "email", title: "E-Mail-Kontakt", icon: <Mail /> },
    { id: "cookies", title: "Cookies", icon: <Cookie /> },
    { id: "google", title: "Google Search Console", icon: <Search /> },
    { id: "werbung", title: "Werbung", icon: <MessageSquare /> },
    { id: "rechte", title: "Deine Rechte", icon: <ShieldCheck /> },
    { id: "aenderung", title: "Änderungen", icon: <FileText /> }
  ];
  
  const toggleSection = (id) => {
    if (activeSection === id) {
      setActiveSection(null);
    } else {
      setActiveSection(id);
    }
  };

  useEffect(() => {
    document.title = "Datenschutzerklärung | Webklar";
  }, []);
  
  return (
    <div className="px-4 py-20 max-w-4xl mx-auto text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Header */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
          >
            <Lock className="w-8 h-8 text-blue-400" />
          </motion.div>
          
          <h1 className="text-4xl font-bold tracking-tight">Datenschutzerklärung</h1>
          
          <motion.div 
            className="h-1 w-20 bg-blue-500 rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-400 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hier erfährst du, wie deine Daten auf webklar.de verarbeitet werden.
          </motion.p>
        </motion.div>
        
        {/* Desktop quick nav */}
        <motion.div 
          className="hidden md:flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {sections.map((section, index) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 rounded-full text-sm text-gray-300 hover:bg-blue-500/10 hover:text-white transition-all duration-200 border border-zinc-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              <span className="text-blue-400">{section.icon}</span>
              <span>{section.title}</span>
            </motion.a>
          ))}
        </motion.div>
        
        {/* Content sections */}
        <div className="space-y-6">
          {/* 1. Verantwortlicher */}
          <Section
            id="verantwortlicher"
            title="1. Verantwortlicher"
            icon={<Lock className="w-5 h-5" />}
            isActive={activeSection === "verantwortlicher"}
            onClick={() => toggleSection("verantwortlicher")}
            delay={0.6}
          >
            <p className="mb-4">Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website:</p>
            <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800">
              <p><strong>Yousif Paulus</strong></p>
              <p>Graf-Adolf-Str. 2</p>
              <p>51065 Köln</p>
              <div className="mt-2 pt-2 border-t border-zinc-800 flex items-center">
                <span>E-Mail: </span>
                <span className="ml-1 select-none">
                  hello<span className="select-none text-gray-500"> [at] </span>webklar.de
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
                      <Check className="w-3.5 h-3.5" />
                      <span>Kopiert</span>
                    </motion.div>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopieren</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </Section>
          
          {/* 2. Hosting */}
          <Section
            id="hosting"
            title="2. Hosting"
            icon={<Server className="w-5 h-5" />}
            isActive={activeSection === "hosting"}
            onClick={() => toggleSection("hosting")}
            delay={0.7}
          >
            <p>Diese Website wird bei <strong>Netlify</strong> gehostet. Der Anbieter ist:</p>
            <p className="mt-2">Netlify Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA.</p>
            <p className="mt-2">Netlify verarbeitet personenbezogene Daten (z. B. IP-Adressen) zur Bereitstellung und zum Betrieb der Website. Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und performanten Webauftritt).</p>
          </Section>
          
          {/* 3. Zugriffsdaten */}
          <Section
            id="zugriffsdaten"
            title="3. Zugriffsdaten"
            icon={<MousePointer className="w-5 h-5" />}
            isActive={activeSection === "zugriffsdaten"}
            onClick={() => toggleSection("zugriffsdaten")}
            delay={0.8}
          >
            <p>Beim Besuch der Website werden durch den Hostinganbieter automatisch folgende Daten erfasst:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und Version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3">Diese Daten dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs der Seite (Art. 6 Abs. 1 lit. f DSGVO) und werden nicht mit anderen Datenquellen zusammengeführt.</p>
          </Section>
          
          {/* 4. E-Mail-Kontakt */}
          <Section
            id="email"
            title="4. E-Mail-Kontakt"
            icon={<Mail className="w-5 h-5" />}
            isActive={activeSection === "email"}
            onClick={() => toggleSection("email")}
            delay={0.9}
          >
            <p>Wenn du mir per E-Mail (hello@webklar.de) schreibst, werden deine Angaben inklusive der von dir angegebenen Kontaktdaten gespeichert, um deine Anfrage zu bearbeiten. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO (berechtigtes Interesse an Kommunikation).</p>
          </Section>
          
          {/* 5. Cookies */}
          <Section
            id="cookies"
            title="5. Cookies"
            icon={<Cookie className="w-5 h-5" />}
            isActive={activeSection === "cookies"}
            onClick={() => toggleSection("cookies")}
            delay={1.0}
          >
            <p>Diese Website verwendet derzeit <strong>keine Cookies</strong>, insbesondere keine Tracking- oder Marketing-Cookies.</p>
          </Section>
          
          {/* 6. Google Search Console */}
          <Section
            id="google"
            title="6. Google Search Console"
            icon={<Search className="w-5 h-5" />}
            isActive={activeSection === "google"}
            onClick={() => toggleSection("google")}
            delay={1.1}
          >
            <p>Zur technischen Analyse und Optimierung meiner Website verwende ich <strong>Google Search Console</strong>, ein Tool von Google LLC. Dabei werden keine personenbezogenen Daten der Seitenbesucher erhoben oder gespeichert. Es erfolgt keine Verknüpfung mit individuellen Nutzerprofilen.</p>
          </Section>
          
          {/* 7. Werbung */}
          <Section
            id="werbung"
            title="7. Werbung"
            icon={<MessageSquare className="w-5 h-5" />}
            isActive={activeSection === "werbung"}
            onClick={() => toggleSection("werbung")}
            delay={1.2}
          >
            <p>Aktuell werden auf dieser Website keine Werbeanzeigen geschaltet. Sollte dies in Zukunft der Fall sein, wird diese Datenschutzerklärung entsprechend angepasst.</p>
          </Section>
          
          {/* 8. Deine Rechte */}
          <Section
            id="rechte"
            title="8. Deine Rechte"
            icon={<ShieldCheck className="w-5 h-5" />}
            isActive={activeSection === "rechte"}
            onClick={() => toggleSection("rechte")}
            delay={1.3}
            highlight={true}
          >
            <p>Du hast jederzeit das Recht auf:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
              {[
                { right: "Auskunft über deine gespeicherten Daten", article: "Art. 15 DSGVO" },
                { right: "Berichtigung unrichtiger Daten", article: "Art. 16 DSGVO" },
                { right: "Löschung", article: "Art. 17 DSGVO" },
                { right: "Einschränkung der Verarbeitung", article: "Art. 18 DSGVO" },
                { right: "Widerspruch gegen die Verarbeitung", article: "Art. 21 DSGVO" },
                { right: "Datenübertragbarkeit", article: "Art. 20 DSGVO" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex justify-between bg-zinc-900 p-3 rounded-lg border border-zinc-800"
                  whileHover={{ y: -2, backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{item.right}</span>
                  <span className="text-blue-400 text-sm">{item.article}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-4">Du kannst dich zudem bei der zuständigen Aufsichtsbehörde beschweren, wenn du der Ansicht bist, dass deine Daten unrechtmäßig verarbeitet werden.</p>
          </Section>
          
          {/* 9. Änderung */}
          <Section
            id="aenderung"
            title="9. Änderung der Datenschutzerklärung"
            icon={<FileText className="w-5 h-5" />}
            isActive={activeSection === "aenderung"}
            onClick={() => toggleSection("aenderung")}
            delay={1.4}
          >
            <p>Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, etwa bei neuen gesetzlichen Anforderungen oder funktionalen Änderungen der Website.</p>
          </Section>
        </div>
        
        {/* Footer */}
        <motion.div 
          className="pt-8 mt-12 border-t border-zinc-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <p className="text-sm text-gray-500">
            Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Section({ id, title, icon, children, isActive, onClick, delay = 0, highlight = false }) {
  return (
    <motion.div 
      id={id}
      className={`bg-zinc-950 border ${highlight ? 'border-blue-500/20' : 'border-zinc-800'} rounded-xl overflow-hidden shadow-lg ${highlight ? 'bg-blue-900/5' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={onClick}
        whileHover={{ backgroundColor: "rgba(39, 39, 42, 0.4)" }}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${highlight ? 'bg-blue-500/10' : 'bg-zinc-900'}`}>
            {icon}
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 text-gray-300">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}