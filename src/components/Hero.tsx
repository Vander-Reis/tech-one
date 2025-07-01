import React from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen pt-24 flex items-center bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiMwNzE1NDMiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Texto */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#071543]">
              Transformando ideias em <span className="text-[#2593c1]">soluções digitais</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#071543] to-[#2593c1] mb-8 mx-auto lg:mx-0"></div>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl">
              Desenvolvemos tecnologias inovadoras que impulsionam 
              negócios e simplificam processos no mundo digital.
            </p>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-flex items-center px-8 py-4 bg-[#2593c1] text-white rounded-xl font-bold text-lg hover:bg-[#1e7aa3] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Conheça nossos projetos
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Imagem */}
          <div className="lg:w-1/2 relative">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-[#2593c1] translate-x-4 translate-y-4 rounded-2xl"></div>
              <img
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Tecnologia e Inovação"
                className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Botão de rolagem */}
        <div className="flex justify-center mt-16">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="animate-bounce cursor-pointer"
          >
            <ChevronDown size={32} className="text-[#114d99]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;