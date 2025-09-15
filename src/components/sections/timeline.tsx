"use client";

import { motion } from "framer-motion";
import { IconRocket, IconShield, IconTrendingUp, IconUsers } from "@tabler/icons-react";
import { MorphismTimeline } from "@/components/ui/morphism-timeline";
import { MorphismTitle } from "@/components/ui/morphism-title";

const timelineItems = [
  {
    date: "2024",
    title: "Rozšíření služeb",
    description: "Přidali jsme AI řešení a chatboty na míru pro naše klienty. Naše portfolio služeb se rozšířilo o pokročilé bezpečnostní audity.",
    icon: <IconRocket className="h-6 w-6" />,
    status: "completed" as const
  },
  {
    date: "2023",
    title: "Růst týmu",
    description: "Rozšířili jsme náš tým o 5 nových specialistů a otevřeli novou pobočku v Praze. Počet spokojených klientů překročil 500.",
    icon: <IconUsers className="h-6 w-6" />,
    status: "completed" as const
  },
  {
    date: "2022",
    title: "Cloud migrace",
    description: "Pomohli jsme 200+ firmám s migrací na cloud. Zavedli jsme nové bezpečnostní protokoly a 24/7 monitoring.",
    icon: <IconShield className="h-6 w-6" />,
    status: "completed" as const
  },
  {
    date: "2021",
    title: "Založení ThinkHome",
    description: "Samuel Paluba založil ThinkHome s vizí poskytovat moderní IT řešení pro firmy všech velikostí. Začali jsme s 3 členy týmu.",
    icon: <IconTrendingUp className="h-6 w-6" />,
    status: "completed" as const
  }
];

export function Timeline() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <MorphismTitle level={2} variant="primary" align="center" className="mb-6">
            Naše cesta
          </MorphismTitle>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Od skromných začátků až po lídra v oblasti IT služeb. 
            Podívejte se na klíčové milníky naší společnosti.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <MorphismTimeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
}
