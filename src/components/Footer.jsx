import { useEffect, useState } from "react";
import { getFooter } from "../api/footerApi";
import { iconMap } from "../utils/iconMap";

const Footer = () => {
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    getFooter()
      .then(setFooter)
      .catch(err => console.error("Footer fetch error:", err));
  }, []);

  if (!footer) return null;

  const LogoIcon = iconMap[footer.logo.icon] || iconMap.Box;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8 mb-8">

          <div>
            <div className="flex items-center space-x-2 mb-4">
              <LogoIcon className="w-6 h-6 text-indigo-400" />
              <span className="text-xl font-bold text-white">
                {footer.logo.text}
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {footer.description}
            </p>
          </div>

          {footer.sections
            .sort((a, b) => a.order - b.order)
            .map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="hover:text-white transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            {footer.copyright}
          </p>

          <div className="flex space-x-6">
            {footer.socialLinks.map((social, index) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition"
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
