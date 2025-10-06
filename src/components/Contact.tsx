import React from 'react';
import { Phone, Mail, MapPin, Star, Award, Users } from 'lucide-react';
import Oracle from '../imagens/oracle.jpeg.jpeg';
import Martins from '../imagens/martins.png.png';
import Tribanco from '../imagens/tribanco.jpeg';
import Efacil from '../imagens/efacil.jpg';
import Iamar from '../imagens/iamar.jpg';
import Smart from '../imagens/smart.gif';
import TribancoSeguros from '../imagens/tribancoseguros.jpg';
import Tricard from '../imagens/tricard.png';
import Umv from '../imagens/umv.webp';
import UnicaMaquina from '../imagens/unicamaquina.jpg';
import HorizontalCarousel from './HorizontalCarousel';

// Importando fontes do Google
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap');
`;


const Contact = () => {
  const logos = [
    { src: Martins, alt: 'Martins' },
    { src: Tribanco, alt: 'Tribanco' },
    { src: Efacil, alt: 'Efacil' },
    { src: Iamar, alt: 'Iamar' },
    { src: Smart, alt: 'Smart' },
    { src: TribancoSeguros, alt: 'Tribanco Seguros' },
    { src: Tricard, alt: 'Tricard' },
    { src: Umv, alt: 'UMV' },
    { src: UnicaMaquina, alt: 'Unica Maquina' },
  ];

  return (
    <>
      <style>{fontStyles}</style>
      {/* Seção de Parceiros */}
      <section
        id="partners"
        className="py-20 bg-gradient-to-br from-[#071543] via-[#114d99] to-[#2593c1] relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30 animate-pulse"></div>
        <div className="container mx-auto px-4 relative">
          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 group hover:shadow-[0_0_30px_rgba(37,147,193,0.3)]">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-[#2593c1] group-hover:animate-bounce group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-white text-center mb-2 group-hover:text-[#2593c1] transition-colors duration-300 font-poppins">20+</h3>
              <p className="text-gray-200 text-center group-hover:text-white transition-colors duration-300 font-poppins">Clientes Satisfeitos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 group hover:shadow-[0_0_30px_rgba(37,147,193,0.3)]">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-12 h-12 text-[#2593c1] group-hover:animate-bounce group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-white text-center mb-2 group-hover:text-[#2593c1] transition-colors duration-300 font-poppins">5+</h3>
              <p className="text-gray-200 text-center group-hover:text-white transition-colors duration-300 font-poppins">Anos de Experiência</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 group hover:shadow-[0_0_30px_rgba(37,147,193,0.3)]">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-12 h-12 text-[#2593c1] group-hover:animate-bounce group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl font-bold text-white text-center mb-2 group-hover:text-[#2593c1] transition-colors duration-300 font-poppins">90+</h3>
              <p className="text-gray-200 text-center group-hover:text-white transition-colors duration-300 font-poppins">Projetos Entregues</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Texto */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in font-playfair">
                Nossos <span className="text-[#2593c1] relative inline-block">
                  Parceiros
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#2593c1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-white to-[#2593c1] mb-8 mx-auto lg:mx-0"></div>
              <p className="text-xl text-gray-200 max-w-2xl animate-fade-in-up font-poppins">
                Trabalhamos com grandes empresas para entregar as melhores soluções em tecnologia e inovação.
              </p>
            </div>

            {/* Imagem */}
            <div className="lg:w-1/2">
              <div className="w-full h-64 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center border border-white/20 group hover:shadow-[0_0_30px_rgba(37,147,193,0.3)]">
                <img src={Oracle} alt="Oracle" className="max-h-48 max-w-full object-contain transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Trabalhos Feitos */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#071543] font-playfair">
              Trabalhos <span className="text-[#2593c1] relative inline-block">
                Feitos
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#2593c1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#071543] to-[#2593c1] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
              Veja alguns dos principais clientes para quem já entregamos soluções e projetos de sucesso.
            </p>
          </div>
          <HorizontalCarousel items={logos} intervalMs={1500} visibleCount={4} />
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiMwNzE1NDMiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50 animate-pulse"></div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#071543] font-playfair">
              Entre em <span className="text-[#2593c1] relative inline-block">
                Contato
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#2593c1] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
            </h2>
            <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-[#071543] to-[#2593c1] mx-auto mb-4 sm:mb-5 md:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-2 font-poppins">
              Estamos prontos para atender às suas necessidades. Entre em contato conosco!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-[#114d99] font-playfair">Informações de Contato</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start transform hover:scale-105 transition-transform duration-300 group">
                  <div className="bg-gradient-to-br from-[#071543] via-[#114d99] to-[#2593c1] p-3 sm:p-4 rounded-full text-white mr-3 sm:mr-4 shadow-lg group-hover:animate-pulse group-hover:shadow-[0_0_20px_rgba(37,147,193,0.5)]">
                    <Phone size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#2593c1] transition-colors duration-300 font-playfair">Telefone</h4>
                    <a href="tel:+553499293034" className="text-sm sm:text-base text-gray-600 hover:text-[#2593c1] transition-colors duration-300 font-poppins">
                      (34) 99293-0034
                    </a>
                  </div>
                </div>
                <div className="flex items-start transform hover:scale-105 transition-transform duration-300 group">
                  <div className="bg-gradient-to-br from-[#071543] via-[#114d99] to-[#2593c1] p-3 sm:p-4 rounded-full text-white mr-3 sm:mr-4 shadow-lg group-hover:animate-pulse group-hover:shadow-[0_0_20px_rgba(37,147,193,0.5)]">
                    <Mail size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#2593c1] transition-colors duration-300 font-playfair">E-mail</h4>
                    <a href="mailto:contato@techone-it.com.br" className="text-sm sm:text-base text-gray-600 hover:text-[#2593c1] transition-colors duration-300 font-poppins">
                      willian@techone-it.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start transform hover:scale-105 transition-transform duration-300 group">
                  <div className="bg-gradient-to-br from-[#071543] via-[#114d99] to-[#2593c1] p-3 sm:p-4 rounded-full text-white mr-3 sm:mr-4 shadow-lg group-hover:animate-pulse group-hover:shadow-[0_0_20px_rgba(37,147,193,0.5)]">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-[#2593c1] transition-colors duration-300 font-playfair">Endereço</h4>
                    <p className="text-sm sm:text-base text-gray-600 font-poppins">Uberlândia - MG</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 md:mt-12">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-[#114d99] font-playfair">Localização</h3>
                <div className="w-full h-48 sm:h-64 md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(37,147,193,0.3)]">
                  <iframe
                    src="https://www.google.com/maps?q=Uberl%C3%A2ndia%2C%20MG&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização TechOne"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center py-4 sm:py-6 md:py-8">
              <div className="bg-gradient-to-br from-[#071543] via-[#114d99] to-[#2593c1] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center shadow-xl sm:shadow-2xl text-white w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-2 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,147,193,0.3)] relative overflow-hidden">
                {/* Elementos decorativos */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 sm:mb-5 md:mb-6 text-center font-playfair bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                    Fale com a gente agora mesmo!
                  </h3>
                  
                  <div className="flex items-center justify-center mb-4 sm:mb-5">
                    <div className="flex items-center space-x-2 text-yellow-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-sm sm:text-base font-semibold">Atendimento Premium</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center max-w-xs sm:max-w-md md:max-w-xl font-poppins leading-relaxed">
                    Atendimento rápido e personalizado pelo WhatsApp. Clique no botão abaixo e tire suas dúvidas, peça um orçamento ou envie sua mensagem!
                  </p>

                  <div className="flex flex-col items-center space-y-4">
                    <a
                      href="https://wa.me/553499293034?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20TechOne."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#25D366] text-white text-base sm:text-lg md:text-xl font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe57] focus:outline-none focus:ring-4 focus:ring-[#2593c1]/40 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] animate-pulse font-poppins overflow-hidden"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="mr-3 transform group-hover:rotate-12 transition-transform duration-300">
                        <path fill="currentColor" d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.04 2.92A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.2-7.6c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 5.01 4.23.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z"/>
                      </svg>
                      Fale no WhatsApp
                    </a>
                    
                    <p className="text-xs sm:text-sm text-blue-200 font-medium flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Resposta rápida e personalizada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botão flutuante de WhatsApp */}
      <a
        href="https://wa.me/553499293034?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20TechOne."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#25D366] rounded-full shadow-lg sm:shadow-xl hover:shadow-2xl hover:bg-[#1ebe57] transition-all duration-300 group animate-bounce hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.15)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white transform group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8 md:w-10 md:h-10">
          <path fill="currentColor" d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.65 0 5.15 1.03 7.04 2.92A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10Zm5.2-7.6c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.15.19 2.03 3.1 5.01 4.23.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z"/>
        </svg>
      </a>
    </>
  );
};

export default Contact;