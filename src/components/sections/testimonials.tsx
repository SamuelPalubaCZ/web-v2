"use client";

import { motion } from "framer-motion";
import { IconQuote, IconStar } from "@tabler/icons-react";
import { MorphismCard } from "@/components/ui/morphism-card";

const testimonials = [
  {
    name: "Jan Novák",
    company: "TechCorp s.r.o.",
    role: "CEO",
    content: "ThinkHome nám pomohlo zefektivnit celou naši IT infrastrukturu. Jejich přístup je profesionální a vždy najdou řešení.",
    rating: 5
  },
  {
    name: "Marie Svobodová",
    company: "Design Studio",
    role: "Majitelka",
    content: "Konečně máme IT, které funguje bez problémů. Rychlá podpora a spolehlivé služby - to je ThinkHome.",
    rating: 5
  },
  {
    name: "Petr Dvořák",
    company: "E-commerce Plus",
    role: "CTO",
    content: "Migrace na cloud byla hladká a bezpečná. ThinkHome nás provázelo celým procesem a vše funguje perfektně.",
    rating: 5
  }
];

export function Testimonials() {
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Co říkají naši klienti
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Přečtěte si, jak ThinkHome pomohlo firmám různé velikosti s jejich IT potřebami.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                className="h-full group hover:scale-105"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <IconQuote className="h-6 w-6 text-gray-800 dark:text-gray-200 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <IconStar key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="font-semibold text-gray-900 dark:text-gray-50">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </MorphismCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
