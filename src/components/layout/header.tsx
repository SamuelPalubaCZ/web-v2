"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { IconSun, IconMoon, IconMenu2, IconX } from "@tabler/icons-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: "Domů", href: "#home" },
    { name: "O nás", href: "#about" },
    { name: "Služby", href: "#services" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/40 dark:border-gray-800/40 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo/black.svg"
              alt="ThinkHome Logo"
              width={200}
              height={26}
              className="h-8 w-auto dark:hidden"
            />
            <Image
              src="/logo/white.svg"
              alt="ThinkHome Logo"
              width={200}
              height={26}
              className="h-8 w-auto hidden dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-gray-900 dark:text-gray-50/80 hover:text-gray-900 dark:text-gray-50 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:bg-gray-700 transition-colors"
            >
              {theme === "dark" ? (
                <IconSun className="h-4 w-4" />
              ) : (
                <IconMoon className="h-4 w-4" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? (
                <IconX className="h-4 w-4" />
              ) : (
                <IconMenu2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/40 dark:border-gray-800/40 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-gray-900 dark:text-gray-50/80 hover:text-gray-900 dark:text-gray-50 transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
