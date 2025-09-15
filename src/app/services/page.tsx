"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconChevronDown, IconChevronUp, IconCheck, IconShield, IconCpu, IconUsers, IconSettings, IconCloud, IconDatabase, IconLock, IconHeadset, IconSchool, IconBug, IconRobot } from "@tabler/icons-react";
import { MorphismCard } from "@/components/ui/morphism-card";
import { MorphismTitle } from "@/components/ui/morphism-title";
import { MorphismBadge } from "@/components/ui/morphism-badge";

interface ServiceProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  category?: string;
}

function Service({ title, children, icon, category }: ServiceProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <MorphismCard 
        variant="flat" 
        size="lg"
        className="mb-6 hover:scale-105 transition-transform duration-300"
      >
        <button
          type="button"
          className="w-full text-left flex justify-between items-center group"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="flex items-center space-x-4">
            {icon && (
              <div className="p-3 rounded-lg bg-gray-800 dark:bg-gray-200/10 group-hover:bg-gray-800 dark:group-hover:bg-gray-200/20 transition-colors">
                {icon}
              </div>
            )}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                {title}
              </h2>
              {category && (
                <MorphismBadge variant="info" size="sm" className="mt-1">
                  {category}
                </MorphismBadge>
              )}
            </div>
          </div>
          <div className="ml-4 p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            {open ? (
              <IconChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <IconChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </div>
        </button>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </MorphismCard>
    </motion.div>
  );
}

const services = [
  {
    title: "Turn-key IT management a Vzdálená správa",
    category: "Správa",
    icon: <IconSettings className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Kompletní péče o vaše IT prostředí včetně vzdáleného dohledu a
          podpory. Minimalizujeme výpadky, řešíme i drobnosti na dálku.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>24/7 monitoring systémů</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Vzdálená diagnostika a oprava</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Preventivní údržba</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Repasování PC a notebooků",
    category: "Hardware",
    icon: <IconCpu className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Výkup, repas a instalace spolehlivé techniky. Ekologické řešení pro
          každou firmu.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Profesionální repasování</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Garantovaná kvalita</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Ekologické zpracování</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Webové systémy",
    category: "Vývoj",
    icon: <IconCloud className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Kompletní tvorba webů včetně textů, grafiky i správy. Nabízíme dvě
          varianty podle potřeb klienta:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">
              Next.js – ADVANCED
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Moderní pokročilá webová řešení, vysoká rychlost, bezpečnost, škálovatelnost.
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50 mb-2">
              WordPress/BrakeDance – STANDARD
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Rychlé a flexibilní nasazení webu, snadná editace obsahu.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Backup, emaily, privátní cloud/server",
    category: "Infrastruktura",
    icon: <IconDatabase className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Pravidelné zálohování, firemní e-maily, privátní cloud nebo vlastní
          server podle vašich potřeb.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Automatické zálohování</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Firemní e-mailové systémy</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Privátní cloud řešení</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Podpora Google Workspace, Microsoft 365, ZoHo",
    category: "Platformy",
    icon: <IconUsers className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Správa, nastavení i školení pro nejpoužívanější firemní platformy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50">Google Workspace</h4>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50">Microsoft 365</h4>
          </div>
          <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-gray-50">ZoHo</h4>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Kamerové systémy, tiskárny, sítě a WiFi (Unifi), private NAS",
    category: "Infrastruktura",
    icon: <IconSettings className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Komplexní instalace a správa firemní infrastruktury – od sítí a WiFi
          přes tiskárny a kamery až po privátní síťové úložiště (NAS).
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Unifi WiFi systémy</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Kamerové systémy</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Private NAS řešení</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Licenční systémy, poradenství",
    category: "Poradenství",
    icon: <IconLock className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Pomůžeme s výběrem i správou všech potřebných licencí.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Audit stávajících licencí</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Optimalizace nákladů</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Compliance kontrola</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Školení zaměstnanců (vč. bezpečnosti)",
    category: "Vzdělávání",
    icon: <IconSchool className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Školíme v oblasti efektivity práce s IT i kybernetické bezpečnosti,
          práce s e-mailem a vnitrofiremní ochraně dat.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Kybernetická bezpečnost</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Efektivní práce s IT</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Ochrana dat</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Bezpečnostní audit a penetrační testy",
    category: "Bezpečnost",
    icon: <IconShield className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Prověříme bezpečnost vašeho IT, odhalíme slabá místa a připravíme
          nápravná opatření.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Penetrační testy</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Bezpečnostní audit</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Nápravná opatření</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "AI & Chatboti na míru",
    category: "Inovace",
    icon: <IconRobot className="h-6 w-6 text-gray-800 dark:text-gray-200" />,
    content: (
      <div>
        <p className="mb-4">
          Vytváříme firemní AI řešení, postupnou automatizaci i inteligentní
          chatboty přesně dle požadavků.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Inteligentní chatboti</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>Automatizace procesů</span>
          </li>
          <li className="flex items-center space-x-2">
            <IconCheck className="h-4 w-4 text-green-500" />
            <span>AI na míru</span>
          </li>
        </ul>
      </div>
    )
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <MorphismTitle level={1} variant="primary" align="center" className="mb-6">
            Naše služby
          </MorphismTitle>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Kompletní IT řešení pro vaši firmu. Od základní správy až po pokročilé 
            bezpečnostní systémy – vše pod jednou střechou.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              category={service.category}
            >
              {service.content}
            </Service>
          ))}
        </div>
      </div>
    </main>
  );
}