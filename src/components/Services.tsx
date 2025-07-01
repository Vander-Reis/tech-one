import React from 'react';
import { Code, Database, LineChart } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Desenvolvimento de Software',
      description: 'Desenvolvemos soluções de software personalizadas, que vão desde sistemas web complexos até plataformas empresariais integradas. Atuamos tanto no backend quanto no frontend: construímos APIs robustas com .NET, desenvolvemos sistemas com banco de dados Oracle (PL/SQL) e implementamos interfaces modernas, responsivas e otimizadas para a melhor experiência do usuário. Entregamos soluções completas, escaláveis e alinhadas às necessidades específicas de cada cliente.'
    },
    
    {
      icon: <Database size={48} />,
      title: 'Soluções em Banco de Dados',
      description: 'Nossa abordagem foca na implementação de estruturas de dados de ponta, projetadas para oferecer segurança intransigente e alta performance. Isso garante não apenas o armazenamento confiável, mas também a recuperação ágil e precisa de todos os dados, mesmo em cenários de grande volume e complexidade.'
    },
    
    {
      icon: <LineChart size={48} />,
      title: 'Análise de Dados',
      description: 'Transformamos o ciclo de vida dos dados em uma jornada de descoberta. Desde a coleta e o tratamento rigoroso, aplicamos algoritmos e técnicas de análise sofisticadas para identificar tendências, anomalias e oportunidades. Em seguida, damos vida a esses achados por meio de visualizações de dados envolventes e claras, que traduzem a complexidade em insights práticos e facilmente compreensíveis, permitindo que você reaja proativamente e tome decisões informadas com confiança.'
    },
    
  ];

  return (
    <section id="services" className="py-10 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#071543]">Nossos <span className="text-[#2593c1]">Serviços</span></h2>
          <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-[#071543] to-[#2593c1] mx-auto mb-4 sm:mb-5 md:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-2">
            Oferecemos soluções tecnológicas completas para atender às necessidades específicas do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;