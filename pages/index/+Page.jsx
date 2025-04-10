import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, TrendingUp, ArrowRight, Code, ChevronRight } from "lucide-react";
import heroImage from "../../assets/hero-illustration.svg";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    document.title = "Webklar | Websites in 48 Stunden ohne Kompromisse";
  }, []);
  return (
    <div className="px-4 py-20 max-w-6xl mx-auto space-y-48 text-white">
      {/* Enhanced Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        className="relative grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Background glow effect */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl opacity-20" />
        
        <motion.div 
          className="space-y-6 text-center md:text-left relative z-10"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 mb-6 border border-blue-500/20 text-blue-400 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Neu: 48-Stunden Express-Option</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <motion.span 
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                Deine Website.
              </motion.span>
              <motion.span 
                className="block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                In <span className="relative inline-block">
                  <span className="relative z-10">48 Stunden</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-blue-500/20 rounded-lg -z-0"></span>
                </span>.
              </motion.span>
              <motion.span 
                className="block text-blue-500 mt-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                Ab 49 €. Ohne Kompromisse.
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-lg max-w-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            Schluss mit Baukästen. Webklar baut dir eine performante, moderne Landingpage – die verkauft.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <a href="/kontakt">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button className="w-full sm:w-auto px-6 py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition duration-300 shadow-lg shadow-blue-500/20 flex items-center gap-2 group">
                  <span>Jetzt starten</span> 
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </a>
            
            <a href="/pakete" className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 hover:text-white font-medium transition duration-200 px-4 py-1">
              <span>Pakete ansehen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          
          <motion.div 
            className="pt-8 flex flex-wrap gap-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <ShieldCheck className="text-blue-400 w-4 h-4" />
              </div>
              <p className="text-gray-400 text-sm">100% Maßgeschneidert</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <TrendingUp className="text-blue-400 w-4 h-4" />
              </div>
              <p className="text-gray-400 text-sm">SEO-optimiert</p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Code className="text-blue-400 w-4 h-4" />
              </div>
              <p className="text-gray-400 text-sm">Clean Code</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hidden md:block relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Hero image with floating effect */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10"
          >
            <img src={heroImage} alt="Webklar Illustration" className="w-full max-w-md mx-auto" />
          </motion.div>
          
          {/* Accent circles */}
          <motion.div 
            className="absolute top-10 right-10 w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/20 z-0"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute -bottom-10 left-20 w-16 h-16 rounded-full bg-blue-700/10 border border-blue-700/20 z-0"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          />
          
          {/* Code snippets */}
          <motion.div 
            className="absolute top-0 right-0 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 shadow-xl text-xs text-blue-300 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            &lt;div className="<span className="text-green-400">webklar</span>" /&gt;
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 -left-10 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 shadow-xl text-xs text-blue-300 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            launch(<span className="text-orange-400">in48hours</span>)
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10"
      >
        <Feature
          title="Launch in 48h"
          desc="Du brauchst keine langen Prozesse. Deine Website geht in 2 Tagen online."
          icon={<Sparkles className="text-blue-400 w-6 h-6" />}
        />
        <Feature
          title="Kein Bullshit"
          desc="Keine Templates, kein Baukasten. Custom Code mit echtem Mehrwert."
          icon={<ShieldCheck className="text-blue-400 w-6 h-6" />}
        />
        <Feature
          title="SEO inklusive"
          desc="Google-optimiert, mobilfreundlich und blitzschnell. Sichtbar ab Tag 1."
          icon={<TrendingUp className="text-blue-400 w-6 h-6" />}
        />
      </motion.section>

      {/* Story / Warum Webklar */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-zinc-900 border border-zinc-800 p-10 rounded-2xl shadow-lg space-y-10"
      >
        <h2 className="text-3xl font-bold text-center mb-4">Warum Webklar?</h2>
        <div className="text-gray-300 text-lg space-y-6 max-w-4xl mx-auto">
          <p>
            Viele Selbstständige und kleine Unternehmen verschenken jeden Tag Potenzial, weil ihre Website veraltet, überladen oder gar nicht vorhanden ist. 
            Gleichzeitig schrecken Baukastensysteme und Agenturpreise von mehreren tausend Euro ab.
          </p>
          <p>
            Webklar ist dein Shortcut zur Online-Sichtbarkeit. Wir liefern dir eine hochperformante, mobiloptimierte und SEO-freundliche Landingpage – maßgeschneidert, ohne unnötigen Ballast.
          </p>
          <p>
            Unsere Seiten basieren auf sauberem React-Code, werden blitzschnell ausgeliefert und holen deine Zielgruppe genau da ab, wo sie sucht: bei Google, mobil, bereit zu konvertieren.
          </p>
          <p>
            Keine versteckten Kosten, keine Warteschleifen – nur ehrliches Webdesign mit Fokus auf Ergebnisse.
          </p>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-center">Was andere sagen</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Testimonial
            name="Sophie L., Kosmetikerin"
            quote="Ich hatte in 3 Tagen eine professionelle Website – genau wie ich sie mir vorgestellt habe. Und das für 49 €!"
          />
          <Testimonial
            name="Murat B., Fotograf"
            quote="Ich bekomme regelmäßig neue Anfragen über meine neue Landingpage. Endlich sichtbar im Netz!"
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-blue-600 to-blue-500 p-10 rounded-2xl text-center shadow-2xl overflow-hidden"
      >
        <div className="relative z-10">
          <h3 className="text-3xl font-semibold mb-4">
            Deine Website. In 48 Stunden. Bereit?
          </h3>
          <p className="text-blue-100 mb-6 text-lg max-w-xl mx-auto">
            Hol dir jetzt dein kostenloses Angebot – wir melden uns innerhalb von 24 Stunden.
          </p>
          <a href="/kontakt">
            <Button size="lg" className="text-lg px-6 py-4 hover:bg-white hover:text-blue-600 transition">
              Jetzt anfragen
            </Button>
          </a>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      </motion.section>
    </div>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <div className="bg-zinc-900 p-6 border border-zinc-800 rounded-xl shadow-sm space-y-2 text-left">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Testimonial({ name, quote }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm">
      <p className="text-gray-300 italic">"{quote}"</p>
      <p className="text-right text-sm font-medium mt-4 text-gray-500">– {name}</p>
    </div>
  );
}