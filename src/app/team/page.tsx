"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconMail, IconPhone, IconUser } from "@tabler/icons-react";

interface TeamMember {
  name: string;
  email: string;
  role: string;
  description: string;
  phone: string;
  photo_location: string;
  tag: string;
  department: string;
}

function parseCSV(csvContent: string): TeamMember[] {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  const headerMapping: { [key: string]: string } = {
    'jmeno': 'name',
    'email': 'email',
    'role': 'role',
    'popis': 'description',
    'telefon': 'phone',
    'foto': 'photo_location',
    'tag': 'tag',
    'oddeleni': 'department'
  };
  
  return lines.slice(1).map(line => {
    const values: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    const member: Record<string, string> = {};
    
    headers.forEach((header, index) => {
      const mappedHeader = headerMapping[header.toLowerCase()] || header.toLowerCase();
      member[mappedHeader] = values[index] || '';
    });
    
    return member as unknown as TeamMember;
  });
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="h-full p-6 bg-white/80 dark:bg-gray-800/80/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-xl hover:bg-white/80 dark:bg-gray-800/80/80 transition-all duration-300 thinkpad-shadow group-hover:scale-105">
        <div className="flex flex-col items-center text-center">
          {/* Photo */}
          <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            {member.photo_location && member.photo_location.trim() !== '' ? (
              <Image
                src={`/team/pictures/${member.photo_location}`}
                alt={member.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-800 dark:bg-gray-200/10"><svg class="h-8 w-8 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                  }
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 dark:bg-gray-200/10">
                <IconUser className="h-8 w-8 text-gray-800 dark:text-gray-200" />
              </div>
            )}
          </div>

          {/* Name & Role */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
            {member.name}
          </h3>
          <p className="text-gray-800 dark:text-gray-200 font-medium mb-3">
            {member.role}
          </p>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            {member.description}
          </p>

          {/* Department */}
          <div className="px-3 py-1 bg-gray-800 dark:bg-gray-200/10 rounded-full text-xs font-medium text-gray-800 dark:text-gray-200 mb-4">
            {member.department}
          </div>

          {/* Contact Info */}
          <div className="space-y-2 w-full">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-50 transition-colors"
            >
              <IconMail className="h-4 w-4" />
              <span>{member.email}</span>
            </a>
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-50 transition-colors"
              >
                <IconPhone className="h-4 w-4" />
                <span>{member.phone}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadTeamData() {
      try {
        const response = await fetch('/team/source.csv');
        const csvContent = await response.text();
        const members = parseCSV(csvContent);
        setTeamMembers(members);
      } catch (error) {
        console.error('Error loading team data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadTeamData();
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-gray-900 dark:text-gray-50 text-xl">Načítání dat týmu...</div>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Členové týmu
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Poznejte náš tým odborníků, kteří vám pomohou s IT řešeními
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member: TeamMember, index: number) => (
            <TeamMemberCard
              key={`${member.name}-${index}`}
              member={member}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
