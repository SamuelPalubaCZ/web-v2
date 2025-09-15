"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { MorphismCard } from "@/components/ui/morphism-card";
import { MorphismButton } from "@/components/ui/morphism-button";
import { MorphismBadge } from "@/components/ui/morphism-badge";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText: string;
  buttonVariant?: "primary" | "secondary" | "accent";
}

interface MorphismPricingProps {
  plans: PricingPlan[];
  className?: string;
}

export function MorphismPricing({ plans, className = "" }: MorphismPricingProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <MorphismBadge variant="success" size="md">
                Nejoblíbenější
              </MorphismBadge>
            </div>
          )}
          
          <MorphismCard 
            variant={plan.popular ? "raised" : "flat"} 
            size="lg"
            className={`h-full ${plan.popular ? "ring-2 ring-gray-800 dark:ring-gray-200" : ""}`}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {plan.description}
              </p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-50">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-1">
                  {plan.period}
                </span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <div className={`
                    w-5 h-5 rounded-full flex items-center justify-center
                    ${feature.included 
                      ? "bg-green-500 text-white" 
                      : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400"
                    }
                  `}>
                    {feature.included ? "✓" : "✗"}
                  </div>
                  <span className={`text-sm ${
                    feature.included 
                      ? "text-gray-900 dark:text-gray-50" 
                      : "text-gray-500 dark:text-gray-400"
                  }`}>
                    {feature.name}
                  </span>
                </div>
              ))}
            </div>
            
            <MorphismButton
              variant={plan.buttonVariant || "secondary"}
              size="lg"
              className="w-full"
            >
              {plan.buttonText}
            </MorphismButton>
          </MorphismCard>
        </motion.div>
      ))}
    </div>
  );
}
