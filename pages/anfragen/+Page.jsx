import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  CheckCircle,
  ArrowRight,
  Target,
  LayoutGrid,
  Image,
  Palette,
  Globe,
  AtSign,
  User,
} from "lucide-react";

const steps = [
  "goal",
  "content",
  "assets",
  "style",
  "color",
  "domain",
  "contactMethod",
  "userInfo",
];

const stepIcons = {
  0: <Target className="w-5 h-5" />,
  1: <LayoutGrid className="w-5 h-5" />,
  2: <Image className="w-5 h-5" />,
  3: <Palette className="w-5 h-5" />,
  4: <Palette className="w-5 h-5" />,
  5: <Globe className="w-5 h-5" />,
  6: <AtSign className="w-5 h-5" />,
  7: <User className="w-5 h-5" />,
};

export default function KontaktFlow() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [animating, setAnimating] = useState(false);

  const update = (key, value) => {
    setAnimating(true);
    setData((prev) => ({ ...prev, [key]: value }));

    // Delay step change to allow for animations
    setTimeout(() => {
      setStep((s) => s + 1);
      setAnimating(false);
    }, 300);
  };

  // Add a subtle background animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.getElementById("contact-flow-container");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    document.title = "Anfragen | Webklar - In 3 Minuten konfigurieren";
  }, []);

  return (
    <div
      id="contact-flow-container"
      className="max-w-2xl mx-auto px-4 py-16 text-white relative"
      style={{
        background:
          "radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.03), transparent)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Deine Website in <span className="text-blue-500">3 Minuten</span>{" "}
            konfigurieren
          </h1>
          <p className="text-gray-400">
            Beantworte ein paar kurze Fragen und wir erstellen dir ein passendes
            Angebot.
          </p>
        </div>

        <Progress step={step} total={steps.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className={`${animating ? "pointer-events-none" : ""}`}
          >
            {step === 0 && (
              <Step
                title="Was soll deine Website tun?"
                description="Wähle das Hauptziel deiner Website aus."
                options={[
                  "Leads generieren",
                  "Dienstleistung präsentieren",
                  "Portfolio zeigen",
                  "Persönliches Profil",
                  "Sonstiges",
                ]}
                onSelect={(value) => update("ziel", value)}
              />
            )}

            {step === 1 && (
              <Step
                title="Welche Inhalte brauchst du?"
                description="Wähle alle Inhalte aus, die deine Website haben soll."
                options={[
                  "Über mich / Unternehmen",
                  "Öffnungszeiten / Kontakt",
                  "Standort / Google Maps",
                  "Portfolio / Galerie",
                  "Kundenstimmen",
                  "Call-to-Action Button",
                  "Preislisten / PDFs",
                  "Bin unsicher, brauche Hilfe",
                ]}
                multi
                onSelect={(value) => update("inhalte", value)}
              />
            )}

            {step === 2 && (
              <Step
                title="Hast du bereits Inhalte?"
                description="Wähle aus, welche Inhalte bereits vorhanden sind."
                options={[
                  "Logo vorhanden",
                  "Texte vorhanden",
                  "Bilder vorhanden",
                  "Alles muss erstellt werden",
                ]}
                multi
                onSelect={(value) => update("assets", value)}
              />
            )}

            {step === 3 && (
              <Step
                title="Wie soll dein Stil sein?"
                description="Wähle den Designstil, der am besten zu dir passt."
                options={[
                  "Minimalistisch",
                  "Modern / Verspielt",
                  "Elegant / Hochwertig",
                  "Rustikal / Natürlich",
                  "Ich bin mir nicht sicher",
                ]}
                onSelect={(value) => update("stil", value)}
              />
            )}

            {step === 4 && (
              <Step
                title="Welche Farben gefallen dir?"
                description="Wähle dein bevorzugtes Farbschema aus."
                options={[
                  "Dunkelblau / Weiß",
                  "Beige / Braun",
                  "Schwarz / Neon",
                  "Pastelltöne",
                  "Ich habe eigene Vorstellungen",
                ]}
                onSelect={(value) => update("farben", value)}
              />
            )}

            {step === 5 && (
              <Step
                title="Wie sieht's mit Domain & Hosting aus?"
                description="Teile uns deinen aktuellen Stand mit."
                options={[
                  "Beides vorhanden",
                  "Nur Domain vorhanden",
                  "Brauche Unterstützung",
                  "Du sollst dich komplett kümmern",
                ]}
                onSelect={(value) => update("hosting", value)}
              />
            )}

            {step === 6 && (
              <Step
                title="Wie sollen Kunden dich kontaktieren?"
                description="Wähle deine bevorzugten Kontaktoptionen."
                options={[
                  "Kontaktformular",
                  "E-Mail-Link",
                  "Telefonnummer",
                  "WhatsApp Button",
                  "Alles kombinieren",
                ]}
                onSelect={(value) => update("kontakt", value)}
              />
            )}

            {step === 7 && <FinalStep onFinish={update} formData={data} />}

            {step === 8 && <SuccessStep data={data} />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function Step({ title, description, options, onSelect, multi = false }) {
  const [selected, setSelected] = useState([]);
  const [hoveredOption, setHoveredOption] = useState(null);

  const toggle = (option) => {
    if (multi) {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
      );
    } else {
      onSelect(option);
    }
  };

  return (
    <div className="space-y-6 bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="grid gap-3">
        {options.map((option) => (
          <motion.button
            key={option}
            onClick={() => toggle(option)}
            onMouseEnter={() => setHoveredOption(option)}
            onMouseLeave={() => setHoveredOption(null)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 ${
              selected.includes(option)
                ? "border-blue-500 bg-gradient-to-r from-blue-500/10 to-blue-600/5 text-white"
                : "border-zinc-700 bg-zinc-800/50 text-gray-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/5"
            }`}
          >
            <span>{option}</span>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: selected.includes(option) ? 1 : 0,
                scale: selected.includes(option) ? 1 : 0,
                rotate: selected.includes(option) ? 360 : 0,
              }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <CheckCircle className="w-5 h-5 text-blue-400" />
            </motion.div>
          </motion.button>
        ))}
      </div>

      {multi && (
        <div className="pt-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={() => onSelect(selected)}
              disabled={selected.length === 0}
              className="w-full flex items-center justify-center gap-2 py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed disabled:from-gray-500 disabled:to-gray-600"
            >
              <span>Weiter</span>
              <motion.div
                animate={{ x: selected.length === 0 ? 0 : [0, 5, 0] }}
                transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 1 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function FinalStep({ onFinish, formData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = name.trim() !== "" && email.trim() !== "";

  const submit = async () => {
    setIsSubmitting(true);
    
    const completeFormData = {
      name,
      email,
      phone,
      message,
      ...formData, // alle Steps vorher (ziel, inhalte, assets, stil, farben, hosting, kontakt)
    };

    try {
      const res = await fetch("https://formspree.io/f/myzellak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeFormData),
      });

      if (res.ok) {
        onFinish("kontaktInfo", completeFormData); // führt dich zum SuccessStep
      } else {
        alert("Fehler beim Absenden. Bitte versuch's später erneut.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      alert("Netzwerkfehler. Bitte versuch's später erneut.");
      setIsSubmitting(false);
    }
  };

  // For input field animations
  const variants = {
    focused: { scale: 1.02, borderColor: "rgba(59, 130, 246, 0.8)" },
    filled: { borderColor: "rgba(59, 130, 246, 0.3)" },
    empty: { borderColor: "rgba(63, 63, 70, 1)" },
  };

  return (
    <div className="space-y-6 bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-2xl font-semibold">Fast geschafft!</h2>
        <p className="text-gray-400 text-sm">
          Hinterlasse deine Kontaktdaten und wir melden uns innerhalb von 24
          Stunden bei dir.
        </p>
      </motion.div>

      <div className="space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400 mb-1.5"
          >
            Name
          </label>
          <motion.div
            animate={
              focusedField === "name" ? "focused" : name ? "filled" : "empty"
            }
            variants={variants}
            transition={{ duration: 0.2 }}
            className="relative rounded-lg overflow-hidden"
          >
            <input
              id="name"
              type="text"
              placeholder="Dein vollständiger Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-zinc-800 text-white p-3.5 rounded-lg border border-zinc-700 focus:outline-none transition-all duration-300 shadow-inner"
            />
            {focusedField === "name" && (
              <motion.div
                className="absolute inset-0 bg-blue-500/5 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-1.5"
          >
            E-Mail-Adresse
          </label>
          <motion.div
            animate={
              focusedField === "email" ? "focused" : email ? "filled" : "empty"
            }
            variants={variants}
            transition={{ duration: 0.2 }}
            className="relative rounded-lg overflow-hidden"
          >
            <input
              id="email"
              type="email"
              placeholder="deine@email.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-zinc-800 text-white p-3.5 rounded-lg border border-zinc-700 focus:outline-none transition-all duration-300 shadow-inner"
            />
            {focusedField === "email" && (
              <motion.div
                className="absolute inset-0 bg-blue-500/5 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-400 mb-1.5"
          >
            Telefonnummer (optional)
          </label>
          <motion.div
            animate={
              focusedField === "phone" ? "focused" : phone ? "filled" : "empty"
            }
            variants={variants}
            transition={{ duration: 0.2 }}
            className="relative rounded-lg overflow-hidden"
          >
            <input
              id="phone"
              type="tel"
              placeholder="+49 123 456789"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-zinc-800 text-white p-3.5 rounded-lg border border-zinc-700 focus:outline-none transition-all duration-300 shadow-inner"
            />
            {focusedField === "phone" && (
              <motion.div
                className="absolute inset-0 bg-blue-500/5 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400 mb-1.5"
          >
            Nachricht (optional)
          </label>
          <motion.div
            animate={
              focusedField === "message"
                ? "focused"
                : message
                ? "filled"
                : "empty"
            }
            variants={variants}
            transition={{ duration: 0.2 }}
            className="relative rounded-lg overflow-hidden"
          >
            <textarea
              id="message"
              placeholder="Weitere Infos oder Wünsche..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              rows="3"
              className="w-full bg-zinc-800 text-white p-3.5 rounded-lg border border-zinc-700 focus:outline-none transition-all duration-300 shadow-inner resize-none"
            />
            {focusedField === "message" && (
              <motion.div
                className="absolute inset-0 bg-blue-500/5 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="pt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: isValid && !isSubmitting ? 1.02 : 1 }}
          whileTap={{ scale: isValid && !isSubmitting ? 0.98 : 1 }}
        >
          <Button
            onClick={submit}
            disabled={!isValid || isSubmitting}
            className="w-full flex items-center justify-center gap-2 py-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed disabled:from-gray-500 disabled:to-gray-600"
          >
            <span>{isSubmitting ? "Wird gesendet..." : "Anfrage abschicken"}</span>
            <motion.div
              animate={{
                x: isValid && !isSubmitting ? [0, 5, 0] : 0,
                opacity: isValid && !isSubmitting ? 1 : 0.5,
              }}
              transition={{
                repeat: isValid && !isSubmitting ? Infinity : 0,
                repeatDelay: 1.5,
                duration: 1,
              }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Button>
        </motion.div>

        <motion.p
          className="text-xs text-gray-500 mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Mit dem Absenden stimmst du zu, dass wir deine Daten zur Bearbeitung
          deiner Anfrage verwenden dürfen. Weitere Infos in unserer{" "}
          <a
            href="/dsgvo"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            Datenschutzerklärung
          </a>
          .
        </motion.p>
      </motion.div>
    </div>
  );
}

function SuccessStep({ data }) {
  return (
    <motion.div
      className="space-y-8 bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-lg text-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <motion.div
        className="relative mx-auto w-20 h-20 bg-gradient-to-br from-blue-500/30 to-blue-600/10 rounded-full flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.2,
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CheckCircle className="w-10 h-10 text-blue-500" />
        </motion.div>

        {/* Animating rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            repeatDelay: 0.5,
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            delay: 0.3,
            repeatDelay: 0.5,
          }}
        />
      </motion.div>

      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <h2 className="text-2xl font-semibold">Danke für deine Anfrage!</h2>
        <p className="text-gray-400">
          Wir haben deine Informationen erhalten und melden uns innerhalb von 24
          Stunden bei dir.
        </p>
      </motion.div>

      <motion.div
        className="pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/">
            <Button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20">
              Zurück zur Startseite
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Progress({ step, total }) {
  return (
    <div className="mb-8">
      <div className="relative flex justify-between mb-4">
        {/* Connection line that runs behind the circles */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-700 -translate-y-1/2 z-0"></div>

        {Array.from({ length: total }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{
              scale: step >= i ? 1 : 0.9,
              opacity: 1,
            }}
            transition={{ duration: 0.3 }}
            className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${
              step >= i
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-zinc-800 text-gray-400"
            } transition-all duration-300 ${
              step === i ? "ring-4 ring-blue-500/20" : ""
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: step > i ? 360 : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              {step > i ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                stepIcons[i] || (
                  <span className="text-xs font-medium">{i + 1}</span>
                )
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="text-sm text-center text-gray-400 font-medium">
        Schritt {step + 1} von {total}
      </div>
    </div>
  );
}