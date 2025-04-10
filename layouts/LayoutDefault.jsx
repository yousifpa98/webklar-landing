import "./style.css";
import "./tailwind.css";

import logoUrl from "../assets/logo.png";
import { Link } from "../components/Link.js";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function LayoutDefault({ children }) {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Header scrolled={scrolled} />
      <main className="flex-1 overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}

function Header({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className={`sticky top-0 z-50 backdrop-blur-lg ${
        scrolled
          ? "bg-zinc-950/90 border-b border-zinc-800/80 py-3"
          : "bg-zinc-950/60 py-5"
      } px-6 flex items-center justify-between relative transition-all duration-300`}
    >
      <motion.a
        href="/"
        className="flex items-center gap-3 group z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <motion.img
            src={logoUrl}
            alt="Webklar Logo"
            className="h-10 w-10"
            whileHover={{ rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          />
          <motion.div
            className="absolute -inset-1 rounded-full bg-blue-500/20 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
        <motion.span
          className="font-semibold text-lg tracking-tight"
          whileHover={{ color: "#60a5fa" }}
          transition={{ duration: 0.2 }}
        >
          Webklar
        </motion.span>
      </motion.a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4 text-sm font-medium">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">Über uns</NavLink>
        <NavLink href="/pakete">Pakete</NavLink>
        <NavLink href="/anfragen">Anfragen</NavLink>
        <NavLink href="/kontakt">Kontakt</NavLink>
      </nav>

      {/* Mobile Toggle */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="md:hidden z-10 text-gray-300 hover:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 flex flex-col items-center gap-6 py-8 md:hidden z-0 overflow-hidden"
          >
            <MobileNavLink href="/" onClick={() => setOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setOpen(false)}>
              Über uns
            </MobileNavLink>
            <MobileNavLink href="/pakete" onClick={() => setOpen(false)}>
              Pakete
            </MobileNavLink>
            <MobileNavLink href="/anfragen" onClick={() => setOpen(false)}>
              Anfragen
            </MobileNavLink>
            <MobileNavLink href="/kontakt" onClick={() => setOpen(false)}>
              Kontakt
            </MobileNavLink>

            <motion.div
              className="mt-4 pt-6 border-t border-zinc-800 w-40 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="/anfragen"
                className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <span>Jetzt starten</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ href, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative px-3 py-2 rounded-md text-gray-300 hover:text-white transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <motion.div
        className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="relative text-xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
      >
        {children}
      </Link>
    </motion.div>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/50 px-6 py-10 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoUrl} alt="Webklar Logo" className="h-8 w-8" />
              <span className="font-semibold text-lg text-white">Webklar</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Performante Websites für Selbständige und kleine Unternehmen.
              Schnell, zuverlässig und ohne unnötigen Ballast.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pakete" className="hover:text-white transition">
                  Landingpages
                </Link>
              </li>
              <li>
                <Link href="/pakete" className="hover:text-white transition">
                  Portfolioseiten
                </Link>
              </li>
              <li>
                <Link href="/pakete" className="hover:text-white transition">
                  SEO-Optimierung
                </Link>
              </li>
              <li>
                <Link href="/pakete" className="hover:text-white transition">
                  Express-Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/anfragen" className="hover:text-white transition">
                  Anfrage stellen
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/kontakt" className="hover:text-white transition">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-white transition">
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/dsgvo"
                  className="hover:text-white transition"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {currentYear} Webklar. Kein Baukasten. Sondern Code, der wirkt.
          </p>
          <div className="flex flex-wrap gap-6 text-center md:text-right">
            <Link href="/impressum" className="hover:text-white transition">
              Impressum
            </Link>
            <Link href="/dsgvo" className="hover:text-white transition">
              Datenschutz
            </Link>
            <Link href="/anfragen" className="hover:text-white transition">
              Anfragen
            </Link>
            <Link href="/kontakt" className="hover:text-white transition">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
