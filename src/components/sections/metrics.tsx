"use client";

import { motion } from "framer-motion";
import { MorphismCard } from "@/components/ui/morphism-card";
import { MorphismProgress } from "@/components/ui/morphism-progress";
import { MorphismTitle } from "@/components/ui/morphism-title";

const metrics = [
  {
    title: "Spokojenost klientů",
    value: 98,
    description: "Průměrné hodnocení našich služeb",
    color: "success" as const
  },
  {
    title: "Dostupnost služeb",
    value: 99.9,
    description: "SLA garantovaná dostupnost",
    color: "primary" as const
  },
  {
    title: "Rychlost odezvy",
    value: 15,
    description: "Průměrná doba odpovědi v minutách",
    color: "warning" as const
  },
  {
    title: "Úspěšnost projektů",
    value: 100,
    description: "Projektů dokončených v termínu",
    color: "success" as const
  }
];

export function Metrics() {
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
            Naše metriky
          </MorphismTitle>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Čísla mluví za vše. Podívejte se na naše klíčové výkonnostní ukazatele 
            a přesvědčte se o kvalitě našich služeb.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MorphismCard variant="raised" size="lg" className="h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                    {metric.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {metric.description}
                  </p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-gray-50">
                      {metric.value}
                      {metric.title.includes("Dostupnost") || metric.title.includes("Spokojenost") || metric.title.includes("Úspěšnost") ? "%" : ""}
                    </span>
                    {metric.title.includes("Rychlost") && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">min</span>
                    )}
                  </div>
                  
                  <MorphismProgress
                    value={metric.value}
                    max={metric.title.includes("Rychlost") ? 60 : 100}
                    color={metric.color}
                    size="lg"
                  />
                </div>
              </MorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
