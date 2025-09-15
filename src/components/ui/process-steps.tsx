"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { MorphismCard } from "@/components/ui/morphism-card";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
  status?: "completed" | "current" | "upcoming";
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessSteps({ steps, className = "" }: ProcessStepsProps) {
  return (
    <div className={`space-y-8 ${className}`}>
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line */}
          {index < steps.length - 1 && (
            <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300 dark:bg-gray-600" />
          )}
          
          <div className="flex items-start space-x-6">
            {/* Step Number */}
            <div className="flex-shrink-0">
              <MorphismCard
                variant={step.status === "completed" ? "pressed" : "raised"}
                size="sm"
                className={`
                  w-12 h-12 flex items-center justify-center text-lg font-bold
                  ${step.status === "completed" 
                    ? "bg-green-500 text-white" 
                    : step.status === "current"
                    ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400"
                  }
                `}
              >
                {step.status === "completed" ? "✓" : step.number}
              </MorphismCard>
            </div>
            
            {/* Step Content */}
            <div className="flex-1 min-w-0">
              <MorphismCard variant="flat" size="lg" className="h-full">
                <div className="flex items-start space-x-4">
                  {step.icon && (
                    <div className="flex-shrink-0 p-2 rounded-lg bg-gray-800 dark:bg-gray-200/10">
                      {step.icon}
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </MorphismCard>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
