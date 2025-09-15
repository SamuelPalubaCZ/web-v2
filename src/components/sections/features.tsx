"use client";

import { motion } from "framer-motion";
import { IconShield, IconCpu, IconUsers, IconClock, IconSettings, IconTrendingUp } from "@tabler/icons-react";
import { MorphismCard } from "@/components/ui/morphism-card";
import { MorphismBadge } from "@/components/ui/morphism-badge";

const features = [
  {
    icon: IconShield,
    title: "Bezpečnost",
    description: "Kompletní ochrana vašich dat a systémů",
    badge: "Priorita",
    color: "text-red-500"
  },
  {
    icon: IconCpu,
    title: "Výkon",
    description: "Optimalizované IT řešení pro maximální efektivitu",
    badge: "Rychlost",
    color: "text-blue-500"
  },
  {
    icon: IconUsers,
    title: "Podpora",
    description: "24/7 technická podpora pro vaše potřeby",
    badge: "Dostupnost",
    color: "text-green-500"
  },
  {
    icon: IconClock,
    title: "Rychlost",
    description: "Okamžité řešení problémů a rychlé nasazení",
    badge: "Expres",
    color: "text-yellow-500"
  },
  {
    icon: IconSettings,
    title: "Přizpůsobení",
    description: "Řešení na míru pro vaše specifické potřeby",
    badge: "Custom",
    color: "text-purple-500"
  },
  {
    icon: IconTrendingUp,
    title: "Růst",
    description: "Škálovatelná řešení, která rostou s vaší firmou",
    badge: "Future",
    color: "text-indigo-500"
  }
];

export function Features() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Proč si vybrat ThinkHome?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Kombinujeme nejmodernější technologie s osobním přístupem, 
            abychom vám poskytli IT řešení, která skutečně fungují.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
                className="h-full text-center group hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className={`p-4 rounded-full bg-white/80 dark:bg-gray-800/80 mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                      {feature.title}
                    </h3>
                    <MorphismBadge variant="info" size="sm">
                      {feature.badge}
                    </MorphismBadge>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
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
