import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ElementType;
  page: string;
}

interface HeaderProps {
  navItems: NavItem[];
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Company Name</div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.page)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.page
                    ? 'bg-white text-black'
                    : 'hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setCurrentPage(item.page);
                setMobileMenuOpen(false);
              }}
              className={`flex items-center space-x-2 w-full px-4 py-2 ${
                currentPage === item.page ? 'bg-white text-black' : ''
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;