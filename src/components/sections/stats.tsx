"use client";

import { motion } from "framer-motion";
import { IconUsers, IconBuilding, IconAward, IconClock } from "@tabler/icons-react";
import { MorphismCard } from "@/components/ui/morphism-card";

const stats = [
  {
    icon: IconUsers,
    value: "500+",
    label: "Spokojených klientů",
    description: "Firem všech velikostí"
  },
  {
    icon: IconBuilding,
    value: "15+",
    label: "Let zkušeností",
    description: "V IT oboru"
  },
  {
    icon: IconAward,
    value: "99.9%",
    label: "Dostupnost služeb",
    description: "SLA garantováno"
  },
  {
    icon: IconClock,
    value: "< 1h",
    label: "Průměrná doba odezvy",
    description: "Na technické problémy"
  }
];

export function Stats() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Naše čísla mluví za vše
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Důvěra našich klientů a dlouholeté zkušenosti jsou naší největší hodnotou.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <MorphismCard 
                variant="raised" 
                size="lg"
                className="text-center group hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-gray-800 dark:bg-gray-200/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-gray-800 dark:text-gray-200" />
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </MorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
