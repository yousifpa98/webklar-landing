import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import errorImage from "../../assets/404.svg";
import { useEffect } from 'react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 - Seite nicht gefunden | Webklar";
  }, []);
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-md w-full mx-auto text-center space-y-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated illustration */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Glowing background effect for illustration */}
          <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-3xl opacity-50 z-0" />
          
          <motion.img
            src={errorImage}
            alt="404 Illustration"
            className="relative z-10 mx-auto max-w-full h-auto"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 6,
              ease: "easeInOut"
            }}
          />
          
          {/* Animated stars */}
          <motion.div
            className="absolute top-10 right-10 w-2 h-2 rounded-full bg-blue-400"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              repeatType: "loop" 
            }}
          />
          <motion.div
            className="absolute top-20 left-20 w-1 h-1 rounded-full bg-indigo-300"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2.5, 
              repeatType: "loop",
              delay: 0.5
            }}
          />
        </motion.div>

        {/* Error message */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.h1 
            className="text-7xl font-bold text-white"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 10, 
              delay: 0.5 
            }}
          >
            404
          </motion.h1>
          <h2 className="text-2xl font-medium text-white">Seite nicht gefunden</h2>
          <p className="text-gray-400 mt-4">
            Es sieht so aus, als hättest du dich verirrt. Die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => window.history.back()}
              variant="outline" 
              className="w-full sm:w-auto flex items-center gap-2 py-6 px-5 text-gray-300 border-zinc-700 hover:bg-zinc-800 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück</span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/">
              <Button 
                className="w-full sm:w-auto flex items-center gap-2 py-6 px-5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
              >
                <Home className="w-4 h-4" />
                <span>Zur Startseite</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Extra help */}
        <motion.div 
          className="pt-10 border-t border-zinc-800 mt-12 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>Brauchst du Hilfe? <a href="/kontakt" className="text-blue-400 hover:underline">Kontaktiere uns</a></p>
        </motion.div>
      </motion.div>
    </div>
  );
}