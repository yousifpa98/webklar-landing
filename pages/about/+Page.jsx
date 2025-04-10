import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Rocket, Brain, TrendingUp, Settings } from "lucide-react";
import aboutImage from "../../assets/about.svg";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Über uns | Webklar - Keine Agentur, nur Resultate";
  }, []);
  return (
    <div className="px-4 py-20 max-w-6xl mx-auto space-y-32 text-white">
      {/* Hero / Intro */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6 text-center md:text-left">
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
            }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Keine Agentur. Kein Bullshit.
            <span className="block text-blue-500 mt-2">Nur schnelle, schlanke Weblösungen.</span>
          </motion.h1>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-gray-400 text-lg max-w-lg"
          >
            Webklar steht für performante Landingpages, die sichtbar sind – und verkaufen. In 48 Stunden. Ohne Kompromisse.
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="/pakete">
                <Button className="px-6 py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2 group">
                  <span>Paket wählen</span> 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
          }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img src={aboutImage} alt="Webklar Illustration" className="w-full max-w-md mx-auto" />
          </motion.div>
          
          {/* Accent elements */}
          <motion.div 
            className="absolute top-10 right-10 w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 z-0"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -bottom-10 left-20 w-16 h-16 rounded-full bg-blue-700/10 border border-blue-700/20 z-0"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.section>

      {/* What is Webklar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto text-center space-y-8"
      >
        <h2 className="text-3xl font-bold">Was Webklar wirklich ist.</h2>
        <div className="text-gray-300 text-lg space-y-6">
          <p>
            Webklar ist kein klassisches Webstudio. Wir sind Entwickler, Designer und Strategen mit einer klaren Mission: Landingpages zu bauen, die nicht nur gut aussehen – sondern Ergebnisse liefern.
          </p>
          <p>
            Hinter Webklar steckt ein kleines Team mit einem großen Anspruch: technische Präzision, visuelle Klarheit und sofortige Wirkung.
          </p>
        </div>
      </motion.section>

      {/* What makes us different */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-center">Was Webklar von Agenturen unterscheidet</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Rocket className="w-6 h-6 text-blue-400" />}
            title="Launch in 48h"
            description="Dein Webauftritt ist in zwei Tagen online – keine leeren Versprechen, sondern ein klarer Prozess."
          />
          <FeatureCard 
            icon={<Brain className="w-6 h-6 text-blue-400" />}
            title="Fokus auf Conversion"
            description="Jede Sektion deiner Seite hat ein Ziel: verkaufen. Keine überflüssigen Elemente, kein Design-Geblubber."
          />
          <FeatureCard 
            icon={<Settings className="w-6 h-6 text-blue-400" />}
            title="Kein Template-Kram"
            description="Du bekommst keinen Baukasten, sondern echtes Custom Code Setup – schnell, sauber, erweiterbar."
          />
          <FeatureCard 
            icon={<TrendingUp className="w-6 h-6 text-blue-400" />}
            title="Sichtbarkeit eingebaut"
            description="SEO-Struktur, Pagespeed, DSGVO und Mobile First – alles schon drin. Keine Add-ons nötig."
          />
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <h2 className="text-3xl font-bold text-center">So arbeiten wir</h2>
        
        <div className="relative space-y-0">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-800 hidden sm:block"></div>
          
          <ProcessStep 
            number="1"
            title="Du wählst dein Paket"
            description="49 €, 149 € oder 249 € – keine versteckten Kosten."
            delay={0.1}
          />
          
          <ProcessStep 
            number="2"
            title="Du klickst dich durch unser Formular"
            description="In wenigen Minuten sagst du uns alles, was wir wissen müssen."
            delay={0.2}
          />
          
          <ProcessStep 
            number="3"
            title="Wir liefern ab"
            description="Nach 48 Stunden hast du die erste Version – ready to go oder ready to feinschliff."
            delay={0.3}
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative bg-gradient-to-br from-blue-600 to-blue-500 p-12 rounded-2xl text-center shadow-2xl overflow-hidden"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">
            Wir machen keine Agentur-Slideshows. Wir liefern Ergebnisse.
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Schnell. Klar. Sichtbar. Vielleicht ist deine Website die nächste.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a href="/anfragen">
                <Button className="px-8 py-6 text-lg hover:bg-white hover:text-blue-600 transition">
                  Jetzt starten
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a href="/pakete">
                <Button variant="outline" className="px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white hover:text-blue-600 transition">
                  Pakete ansehen
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </motion.section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      className="bg-zinc-900 p-8 border border-zinc-800 rounded-2xl shadow-lg h-full"
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function ProcessStep({ number, title, description, delay = 0 }) {
  return (
    <motion.div 
      className="flex items-start gap-8 mb-12 relative z-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex-shrink-0 flex items-center justify-center text-xl font-bold text-blue-400">
        {number}
      </div>
      
      <div className="space-y-2 pt-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}