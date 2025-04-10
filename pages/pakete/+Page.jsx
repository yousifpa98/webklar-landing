import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { BadgeCheck, Layers, Rocket, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function PackagesPage() {
  useEffect(() => {
    document.title = "Pakete | Webklar - Transparente Preise ab 49 €";
  }, []);
  return (
    <div className="px-4 py-20 max-w-6xl mx-auto space-y-32 text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Drei Pakete. <span className="text-blue-500">Ein Ziel.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Ob Start oder Feinschliff – wir haben das passende Paket für deinen professionellen Webauftritt.
        </p>
      </motion.section>

      {/* Package Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <PackageCard
          icon={<BadgeCheck className="w-8 h-8 text-blue-400" />}
          title="Basic"
          price="49 €"
          description="Der perfekte Einstieg für deine Online-Präsenz."
          features={[
            "1 Landingpage (statisch)",
            "Responsives Design",
            "Barrierefrei & DSGVO-konform",
            "SEO-Grundstruktur",
            "Download als ZIP"
          ]}
          delay={0}
        />
        <PackageCard
          icon={<Layers className="w-8 h-8 text-blue-400" />}
          title="Standard"
          badge="Beliebt"
          price="149 €"
          description="Erweiterte Funktionalität für mehr Sichtbarkeit."
          features={[
            "1 Seite mit Zusatzinhalt",
            "1 Feedback-Runde inklusive",
            "Hilfe bei Domain & Hosting",
            "Impressum + Datenschutzerklärung",
            "Anpassbare Farbwelt & Struktur"
          ]}
          highlighted={true}
          delay={0.1}
        />
        <PackageCard
          icon={<Rocket className="w-8 h-8 text-blue-400" />}
          title="Premium"
          price="249 €"
          description="Maximale Performance für dein Online-Business."
          features={[
            "Erweiterung auf Portfolio/Testimonial-Seite",
            "2 Feedback-Runden inklusive",
            "Professionelle SEO-Texte",
            "Tracking & Analytics Setup",
            "Langfristiger Support (30 Tage)"
          ]}
          delay={0.2}
        />
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-zinc-900 border border-zinc-800 p-10 rounded-2xl shadow-lg space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Häufige Fragen</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FaqItem 
            question="Welches Paket passt zu mir?" 
            answer="Für kleinere Projekte oder Einzelpersonen empfehlen wir Basic. Unternehmen mit mehr Inhalten sind mit Standard gut bedient. Premium ist ideal für Selbstständige, die maximal sichtbar sein müssen." 
          />
          <FaqItem 
            question="Wie lange dauert die Umsetzung?" 
            answer="Bei Basic und Standard sind es in der Regel 48 Stunden bis zur ersten Version. Premium-Projekte benötigen durch die erweiterten Features etwa 3-5 Werktage." 
          />
          <FaqItem 
            question="Gibt es laufende Kosten?" 
            answer="Nein. Du bezahlst einmalig den Paketpreis. Nur Hosting und Domain (ca. 5-10€/Monat) fallen separat an, wenn du die Seite live schaltest." 
          />
          <FaqItem 
            question="Kann ich später upgraden?" 
            answer="Selbstverständlich. Du kannst jederzeit von Basic auf Standard oder Premium upgraden. Wir rechnen dir den bereits bezahlten Betrag an." 
          />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-blue-600 to-blue-500 p-12 rounded-2xl text-center shadow-2xl overflow-hidden"
      >
        <div className="relative z-10">
          <h3 className="text-3xl font-semibold mb-4">
            Bereit für deinen neuen Webauftritt?
          </h3>
          <p className="text-blue-100 mb-6 text-lg max-w-xl mx-auto">
            Wir beraten dich kostenlos und unverbindlich zu deinen Möglichkeiten.
          </p>
          <a href="/kontakt">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button size="lg" className="text-lg px-8 py-6 cursor-pointer">
                Kostenlos beraten lassen
              </Button>
            </motion.div>
          </a>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </motion.section>
    </div>
  );
}

function PackageCard({ icon, title, price, description, features, badge, highlighted = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`$${
        highlighted 
          ? "bg-gradient-to-b from-zinc-900 to-zinc-800 border-blue-500/30 scale-105 shadow-xl shadow-blue-500/10" 
          : "bg-zinc-900 border-zinc-800"
      } border rounded-3xl p-8 hover:shadow-2xl transition duration-300 flex flex-col h-full`}
    >
      <div className="space-y-6 flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon}
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          {badge && (
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <p className="text-blue-400 text-4xl font-extrabold">{price}</p>
        <p className="text-gray-400 text-sm">{description}</p>
        <ul className="space-y-3 mt-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <a href="/kontakt">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button className={`w-full ${highlighted ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-zinc-800"} cursor-pointer`}>
              Jetzt anfragen
            </Button>
          </motion.div>
        </a>
      </div>
    </motion.div>
  );
}

function FaqItem({ question, answer }) {
  return (
    <div className="space-y-2">
      <h4 className="text-lg font-semibold text-white">{question}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}