"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconMail, IconPhone, IconUser, IconMessage } from "@tabler/icons-react";
import { MorphismCard } from "@/components/ui/morphism-card";
import { MorphismInput } from "@/components/ui/morphism-input";
import { MorphismButton } from "@/components/ui/morphism-button";
import { MorphismToggle } from "@/components/ui/morphism-toggle";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            Kontaktujte nás
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Máte dotaz nebo potřebujete konzultaci? Rádi vám pomůžeme s čímkoliv, 
            co se týká IT ve vaší firmě.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <MorphismCard variant="raised" size="lg" className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <MorphismInput
                  label="Jméno a příjmení"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Vaše jméno"
                  icon={<IconUser className="h-4 w-4" />}
                  required
                />
                
                <MorphismInput
                  label="E-mail"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vas@email.cz"
                  icon={<IconMail className="h-4 w-4" />}
                  required
                />
              </div>

              <MorphismInput
                label="Telefon"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+420 123 456 789"
                icon={<IconPhone className="h-4 w-4" />}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Zpráva
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Popište váš dotaz nebo požadavek..."
                  rows={5}
                  className="w-full rounded-lg border-0 outline-none focus:outline-none
                    bg-white/60 dark:bg-gray-800/60
                    shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
                    dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.1)]
                    text-gray-900 dark:text-gray-100
                    placeholder-gray-500 dark:placeholder-gray-400
                    transition-all duration-300
                    focus:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]
                    dark:focus:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]
                    p-4 resize-none"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <MorphismToggle
                  checked={formData.newsletter}
                  onChange={(checked) => setFormData({ ...formData, newsletter: checked })}
                  label="Chci dostávat novinky o IT trendech"
                />
              </div>

              <div className="flex justify-center">
                <MorphismButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="px-12"
                >
                  <IconMessage className="mr-2 h-4 w-4" />
                  Odeslat zprávu
                </MorphismButton>
              </div>
            </form>
          </MorphismCard>
        </div>
      </div>
    </section>
  );
}
