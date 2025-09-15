"use client";

import { motion } from "framer-motion";
import { IconMail, IconPhone, IconMapPin, IconCopy, IconCheck } from "@tabler/icons-react";
import { useState } from "react";

const contactWays = [
  {
    icon: IconMail,
    title: "E-mail",
    value: "info@thinkhome.org",
    description: "Napište nám kdykoliv",
  },
  {
    icon: IconPhone,
    title: "Telefon",
    value: "+420 910 129 289",
    description: "Zavolejte nám",
  },
  {
    icon: IconMapPin,
    title: "Lokace",
    value: "Česká republika",
    description: "Působíme po celé ČR",
  },
];

function CopyText({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`group flex items-center space-x-2 ${className}`}
    >
      <span className="text-lg font-medium">{text}</span>
      <div className="p-1 rounded hover:bg-accent transition-colors">
        {copied ? (
          <IconCheck className="h-4 w-4 text-green-500" />
        ) : (
          <IconCopy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
    </button>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Kontaktujte nás
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nevíte si rady? Chcete si poztěžovat? Rádi vám pomůžeme s čímkoliv, 
            co se týká IT ve vaší firmě.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactWays.map((way, index) => {
            const Icon = way.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                 <div className="h-full p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-xl hover:bg-white/90 dark:bg-gray-800/90 transition-all duration-300 thinkpad-shadow group-hover:scale-105">
                   <div className="flex flex-col items-center text-center">
                     <div className="p-4 bg-gray-800 dark:bg-gray-200/10 rounded-full mb-6 group-hover:bg-gray-800 dark:bg-gray-200/20 transition-colors">
                       <Icon className="h-8 w-8 text-gray-800 dark:text-gray-200" />
                     </div>
                     
                     <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                       {way.title}
                     </h3>
                     
                     <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                       {way.description}
                     </p>
                     
                     <CopyText
                       text={way.value}
                       className="text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:text-gray-200/80 transition-colors"
                     />
                   </div>
                 </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
           <div className="max-w-2xl mx-auto p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-xl">
             <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-4">
               Rychlá odpověď zaručena
             </h3>
             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
               Na všechny dotazy odpovídáme do 24 hodin. V případě naléhavých problémů 
               nás neváhejte kontaktovat telefonicky – jsme tu pro vás.
             </p>
           </div>
        </motion.div>
      </div>
    </main>
  );
}
