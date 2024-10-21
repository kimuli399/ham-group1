import React from 'react';
import { Menu, X, Home, Users, Briefcase, Mail } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  const navItems = [
    { name: 'Home', icon: Home, page: 'home' },
    { name: 'About Us', icon: Users, page: 'about' },
    { name: 'Services', icon: Briefcase, page: 'services' },
    { name: 'Contact', icon: Mail, page: 'contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header
        navItems={navItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;