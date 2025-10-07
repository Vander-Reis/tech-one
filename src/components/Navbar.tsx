import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', to: 'hero' },
    { name: 'Sobre', to: 'about' },
    { name: 'Serviços', to: 'services' },
    { name: 'Contato', to: 'contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-[3rem] font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#071543] via-[#2593c1] to-[#3c5c84]">
            TechOne
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            className={`mx-4 cursor-pointer transition-colors duration-300 text-[1.1rem] ${
                scrolled ? 'text-[#071543] hover:text-[#2593c1]' : 'text-[#071543] hover:text-[#2593c1]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className={`p-2 rounded-md ${
              scrolled ? 'text-[#071543]' : 'text-[#071543]'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="py-3 text-[1.1rem] text-[#071543] hover:text-[#2593c1] cursor-pointer"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;