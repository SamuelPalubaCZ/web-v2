"use client";

import { motion } from "framer-motion";
import { IconClock, IconShield, IconCpu, IconUsers } from "@tabler/icons-react";
import { MorphismCard } from "@/components/ui/morphism-card";

const missions = [
  {
    icon: IconClock,
    title: "Šetříme čas i peníze",
    description: "Šetříme zákazníkům čas i peníze chytře automatizovaným a bezpečným IT.",
  },
  {
    icon: IconShield,
    title: "Spolehlivé prostředí",
    description: "Budujeme spolehlivé a stabilní prostředí, které roste s vaší firmou.",
  },
  {
    icon: IconCpu,
    title: "Moderní technologie",
    description: "Nasazujeme moderní technologie pro reálné potřeby klientů.",
  },
  {
    icon: IconUsers,
    title: "Lidský přístup",
    description: "Pomáháme s konzultací, správou i vývojem na míru – lidsky, rychle a srozumitelně.",
  },
];

export function MissionGoals() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            Naše mise a cíle
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Věříme v to, že technologie by měly sloužit lidem, ne naopak. 
            Proto vytváříme řešení, která skutečně fungují.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <MorphismCard 
                variant="raised" 
                size="lg"
                className="h-full text-center group hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-gray-800 dark:bg-gray-200/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <mission.icon className="h-8 w-8 text-gray-800 dark:text-gray-200" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {mission.description}
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
