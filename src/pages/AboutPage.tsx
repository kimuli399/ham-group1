import React from 'react';
import { Award, Users, Zap } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-xl mb-8">
        At Company Name, we're passionate about delivering exceptional solutions
        that drive business growth and innovation. Our team of experts combines
        creativity with technical expertise to help our clients succeed in an
        ever-evolving digital landscape.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center text-center">
          <Award className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Excellence</h3>
          <p>We strive for excellence in everything we do</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Users className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
          <p>We believe in the power of teamwork and partnership</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Zap className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p>We constantly push the boundaries of what's possible</p>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Our team"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

export default AboutPage;