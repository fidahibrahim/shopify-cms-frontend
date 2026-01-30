import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getNavigation } from '../api/navigationApi';
import { iconMap } from '../utils/iconMap';


const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navData, setNavData] = useState(null);

  useEffect(() => {
    getNavigation()
      .then((data) => setNavData(data))
      .catch((err) => console.error("Navigation fetch error:", err))
  }, []);

  if (!navData) {
    return null
  }

  const LogoIcon = iconMap[navData.logo.icon] || iconMap.Box;

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <LogoIcon className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">{navData.logo.text}</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {
              navData.menuItems
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    {item.label}
                  </a>
                ))
            }
            <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
              {navData.ctaButton.text}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-3">
            {navData.menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
              {navData.ctaButton.text}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation
