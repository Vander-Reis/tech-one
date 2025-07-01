import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#071543]">Sobre a <span className="text-[#2593c1]">TechOne</span></h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#071543] to-[#2593c1] mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h3 className="text-2xl font-semibold mb-4 text-[#165077]">Nossa Missão</h3>
            <p className="text-gray-700 mb-6">
              Na TechOne, nossa missão é desenvolver soluções tecnológicas inovadoras que 
              transformam a maneira como empresas e pessoas interagem com o mundo digital. 
              Buscamos constantemente a excelência técnica e a satisfação do cliente em 
              cada projeto que realizamos.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-[#165077]">Nossa Visão</h3>
            <p className="text-gray-700 mb-6">
              Ser reconhecida como referência em inovação tecnológica, desenvolvendo 
              soluções que não apenas atendam às necessidades atuais, mas também antecipem 
              as demandas futuras do mercado digital, criando impacto positivo e 
              duradouro para nossos clientes.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-[#165077]">Nossos Valores</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Inovação constante</li>
              <li>Excelência técnica</li>
              <li>Comprometimento com resultados</li>
              <li>Transparência e ética</li>
              <li>Colaboração e trabalho em equipe</li>
            </ul>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-[#114d99] translate-x-4 translate-y-4 rounded-[2rem]"></div>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,147,193,0.3)]">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ambiente de trabalho TechOne" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;