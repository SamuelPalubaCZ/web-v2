"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { MorphismButton } from "@/components/ui/morphism-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,45,45,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/logo/black.svg"
              alt="ThinkHome Logo"
              width={400}
              height={52}
              className="h-16 w-auto mx-auto dark:hidden"
            />
            <Image
              src="/logo/white.svg"
              alt="ThinkHome Logo"
              width={400}
              height={52}
              className="h-16 w-auto mx-auto hidden dark:block"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-6"
          >
            Moderní IT bez starostí
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Zbavte se starostí o technologie a zaměřte se na své podnikání. 
            ThinkHome nabízí kompletní správu firemního IT – od hardware, 
            přes weby až po moderní bezpečnostní řešení. Vše vyřešíme spolehlivě, 
            rychle a efektivně. Přitom nic nemusíte řešit!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <MorphismButton
              variant="primary"
              size="lg"
              onClick={() => window.location.href = '/services'}
              className="group"
            >
              Naše služby
              <IconArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </MorphismButton>
            
            <MorphismButton
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Kontaktujte nás
            </MorphismButton>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gray-800 dark:bg-gray-200/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-100 dark:bg-gray-700/10 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
}
