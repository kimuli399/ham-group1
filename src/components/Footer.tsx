import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Company Name</h3>
            <p className="mt-2">Providing excellent services since 2023</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;