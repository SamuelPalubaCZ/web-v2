"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { MorphismCard } from "@/components/ui/morphism-card";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: ReactNode;
  status?: "completed" | "current" | "upcoming";
}

interface MorphismTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function MorphismTimeline({ items, className = "" }: MorphismTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-start space-x-6"
          >
            {/* Timeline Dot */}
            <div className="flex-shrink-0 relative z-10">
              <MorphismCard
                variant={item.status === "completed" ? "pressed" : "raised"}
                size="sm"
                className={`
                  w-16 h-16 flex items-center justify-center
                  ${item.status === "completed" 
                    ? "bg-green-500 text-white" 
                    : item.status === "current"
                    ? "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900"
                    : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400"
                  }
                `}
              >
                {item.status === "completed" ? (
                  <div className="w-6 h-6">✓</div>
                ) : item.icon ? (
                  item.icon
                ) : (
                  <div className="w-3 h-3 rounded-full bg-current" />
                )}
              </MorphismCard>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <MorphismCard variant="flat" size="lg" className="h-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                    {item.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {item.date}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </MorphismCard>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
