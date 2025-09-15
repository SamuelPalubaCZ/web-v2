"use client";

import { motion } from "framer-motion";
import { MorphismPricing } from "@/components/ui/morphism-pricing";
import { MorphismTitle } from "@/components/ui/morphism-title";

const pricingPlans = [
  {
    name: "Základní",
    price: "15 000",
    period: "Kč/měsíc",
    description: "Ideální pro malé firmy a startupy",
    features: [
      { name: "Vzdálená správa IT", included: true },
      { name: "Základní bezpečnost", included: true },
      { name: "E-mailová podpora", included: true },
      { name: "Měsíční reporty", included: true },
      { name: "Cloud backup", included: false },
      { name: "24/7 podpora", included: false },
      { name: "Dedikovaný technik", included: false }
    ],
    buttonText: "Začít",
    buttonVariant: "secondary" as const
  },
  {
    name: "Profesionální",
    price: "35 000",
    period: "Kč/měsíc",
    description: "Nejoblíbenější pro střední firmy",
    popular: true,
    features: [
      { name: "Vzdálená správa IT", included: true },
      { name: "Pokročilá bezpečnost", included: true },
      { name: "Prioritní podpora", included: true },
      { name: "Týdenní reporty", included: true },
      { name: "Cloud backup", included: true },
      { name: "24/7 podpora", included: true },
      { name: "Dedikovaný technik", included: false },
      { name: "Bezpečnostní audit", included: true }
    ],
    buttonText: "Vybrat plán",
    buttonVariant: "primary" as const
  },
  {
    name: "Enterprise",
    price: "65 000",
    period: "Kč/měsíc",
    description: "Kompletní řešení pro velké firmy",
    features: [
      { name: "Vzdálená správa IT", included: true },
      { name: "Enterprise bezpečnost", included: true },
      { name: "VIP podpora", included: true },
      { name: "Denní reporty", included: true },
      { name: "Cloud backup", included: true },
      { name: "24/7 podpora", included: true },
      { name: "Dedikovaný technik", included: true },
      { name: "Bezpečnostní audit", included: true },
      { name: "Penetrační testy", included: true },
      { name: "Školení zaměstnanců", included: true }
    ],
    buttonText: "Kontaktovat",
    buttonVariant: "accent" as const
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <MorphismTitle level={2} variant="primary" align="center" className="mb-6">
            Cenové balíčky
          </MorphismTitle>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Vyberte si balíček, který nejlépe odpovídá potřebám vaší firmy. 
            Všechny plány zahrnují naši záruku spokojenosti.
          </p>
        </motion.div>

        <MorphismPricing plans={pricingPlans} />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Potřebujete něco jiného? Kontaktujte nás pro individuální nabídku.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:text-gray-400 transition-colors font-medium"
          >
            Získat individuální nabídku →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
