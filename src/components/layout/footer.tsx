import Link from "next/link";
import Image from "next/image";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-200/40 dark:border-gray-800/40 bg-white/80 dark:bg-gray-800/80/50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo/black.svg"
              alt="ThinkHome Logo"
              width={200}
              height={26}
              className="h-8 w-auto dark:hidden mb-4"
            />
            <Image
              src="/logo/white.svg"
              alt="ThinkHome Logo"
              width={200}
              height={26}
              className="h-8 w-auto hidden dark:block mb-4"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Zbavte se starostí o technologie a zaměřte se na své podnikání. 
              ThinkHome nabízí kompletní správu firemního IT – od hardware, 
              přes weby až po moderní bezpečnostní řešení.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-50 transition-colors text-sm text-left"
                >
                  Služby
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-50 transition-colors text-sm text-left"
                >
                  O nás
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-50 transition-colors text-sm text-left"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-50 mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <IconMail className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <a 
                  href="mailto:info@thinkhome.org" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-50 transition-colors text-sm"
                >
                  info@thinkhome.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <IconPhone className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <a 
                  href="tel:+420910129289" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-50 transition-colors text-sm"
                >
                  +420 910 129 289
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <IconMapPin className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  Česká republika
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/40 dark:border-gray-800/40 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2024 ThinkHome. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
