import React from 'react';
import { Link } from 'react-scroll';
import { Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#071543] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#2593c1] to-[#3c5c84]">
                TechOne
              </span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transformando ideias em soluções digitais inovadoras que impulsionam o seu negócio.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/techoneitconsultoriaeservi-osti/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#2593c1] transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-[#2593c1] transition-colors duration-300 cursor-pointer"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-[#2593c1] transition-colors duration-300 cursor-pointer"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-[#2593c1] transition-colors duration-300 cursor-pointer"
                >
                  Serviços
                </Link>
              </li>
              
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-[#2593c1] transition-colors duration-300 cursor-pointer"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-[#2593c1] transition-colors duration-300 cursor-pointer"
                >
                  Desenvolvimento de Software
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-[#2593c1] transition-colors duration-300 cursor-pointer"
                >
                  Soluções em Banco de Dados
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-[#2593c1] transition-colors duration-300 cursor-pointer"
                >
                  Análise de Dados
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Uberlândia - MG</span>
              </li>
              <li className="text-gray-300">
                <a href="mailto:willian@techone-it.com.br" className="hover:text-[#2593c1]">
                  willian@techone-it.com.br
                </a>
              </li>
              <li className="text-gray-300">
                <a href="https://wa.me/5534991147348" target="_blank" rel="noopener noreferrer" className="hover:text-[#2593c1]">
                  (34) 9911 - 47348
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TechOne. Todos os direitos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-[#114d99] hover:bg-[#165077] text-white p-3 rounded-full transition-colors duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;