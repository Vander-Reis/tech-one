import React from 'react';
import { TestimonialProps } from '../types';
import { Quote } from 'lucide-react';

const TestimonialCard: React.FC<TestimonialProps> = ({ name, position, company, image, testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-start mb-4 text-[#2593c1]">
        <Quote size={32} />
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#071543]">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;