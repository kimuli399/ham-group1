import React from 'react';
import { Code, Palette, BarChart } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Intuitive and visually appealing user interfaces',
    },
    {
      icon: BarChart,
      title: 'Digital Marketing',
      description: 'Strategies to boost your online presence and reach',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <p className="text-xl mb-12">
        We offer a comprehensive range of services to help your business
        succeed in the digital world. Our expert team is dedicated to delivering
        high-quality solutions tailored to your unique needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <service.icon className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;