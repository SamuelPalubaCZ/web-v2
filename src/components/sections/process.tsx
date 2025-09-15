"use client";

import { motion } from "framer-motion";
import { IconSearch, IconMessage, IconSettings, IconCheck } from "@tabler/icons-react";
import { ProcessSteps } from "@/components/ui/process-steps";
import { MorphismTitle } from "@/components/ui/morphism-title";

const processSteps = [
  {
    number: 1,
    title: "Konzultace a analýza",
    description: "Provedeme detailní analýzu vašich IT potřeb a navrhneme optimální řešení na míru.",
    icon: <IconSearch className="h-6 w-6" />,
    status: "completed" as const
  },
  {
    number: 2,
    title: "Návrh řešení",
    description: "Připravíme komplexní návrh IT infrastruktury s ohledem na vaše požadavky a rozpočet.",
    icon: <IconMessage className="h-6 w-6" />,
    status: "current" as const
  },
  {
    number: 3,
    title: "Implementace",
    description: "Postupně nasadíme všechna řešení s minimálním dopadem na vaše podnikání.",
    icon: <IconSettings className="h-6 w-6" />,
    status: "upcoming" as const
  },
  {
    number: 4,
    title: "Podpora a údržba",
    description: "Zajišťujeme nepřetržitou podporu a pravidelné aktualizace pro maximální spolehlivost.",
    icon: <IconCheck className="h-6 w-6" />,
    status: "upcoming" as const
  }
];

export function Process() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <MorphismTitle level={2} variant="primary" align="center" className="mb-6">
            Jak s námi spolupracovat
          </MorphismTitle>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Naše spolupráce probíhá ve čtyřech jasně definovaných krocích, 
            které zajišťují hladký průběh a maximální spokojenost.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <ProcessSteps steps={processSteps} />
        </div>
      </div>
    </section>
  );
}
