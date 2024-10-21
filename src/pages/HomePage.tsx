import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Company Name</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        We provide innovative solutions to help your business thrive in the
        digital age. Discover how we can transform your ideas into reality.
      </p>
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Office workspace"
        className="w-full max-w-4xl rounded-lg shadow-lg mb-8"
      />
      <button className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
        <span>Learn More</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HomePage;