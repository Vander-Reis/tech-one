import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiMwNzE1NDMiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#071543]">
            O que nossos <span className="text-[#2593c1]">clientes dizem</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#071543] to-[#2593c1] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça a experiência de alguns dos nossos clientes que já transformaram seus negócios com nossas soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Depoimento 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#114d99] to-[#2593c1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                J
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800">João Silva</h4>
                <p className="text-gray-600">Diretor de TI, Oracle</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "A TechOne revolucionou nossa infraestrutura de TI. O suporte e a qualidade do serviço são excepcionais."
            </p>
          </div>

          {/* Depoimento 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#114d99] to-[#2593c1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800">Maria Santos</h4>
                <p className="text-gray-600">CEO, Martins</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "A parceria com a TechOne trouxe resultados surpreendentes para nossa empresa. Profissionais altamente qualificados."
            </p>
          </div>

          {/* Depoimento 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#114d99] to-[#2593c1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800">Pedro Costa</h4>
                <p className="text-gray-600">CTO, Tribanco</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "A inovação e o compromisso com resultados da TechOne são impressionantes. Recomendo fortemente!"
            </p>
          </div>

          {/* Depoimento 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#114d99] to-[#2593c1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800">Ana Oliveira</h4>
                <p className="text-gray-600">Gerente de Projetos</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "O atendimento e a qualidade dos serviços da TechOne são excepcionais. Sempre entregam além das expectativas."
            </p>
          </div>

          {/* Depoimento 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#114d99] to-[#2593c1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                R
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800">Ricardo Mendes</h4>
                <p className="text-gray-600">Diretor de Inovação</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "A TechOne tem sido um parceiro fundamental em nossa jornada de transformação digital. Profissionais incríveis!"
            </p>
          </div>

          {/* Depoimento 6 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#114d99] to-[#2593c1] rounded-full flex items-center justify-center text-white font-bold text-xl">
                L
              </div>
              <div className="ml-4">
                <h4 className="text-xl font-bold text-gray-800">Lucas Ferreira</h4>
                <p className="text-gray-600">Analista de Sistemas</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic">
              "A expertise técnica da equipe da TechOne é impressionante. Resolvem problemas complexos com facilidade."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;