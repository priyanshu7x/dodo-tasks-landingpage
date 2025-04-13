
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bird } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bird className="h-8 w-8 text-dodo-500" />
          <span className="text-xl font-bold text-gray-800">Dodo Tasks</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-dodo-500 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-dodo-500 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-600 hover:text-dodo-500 transition-colors">Testimonials</a>
        </div>
        <Button className="bg-dodo-500 hover:bg-dodo-600 text-white">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
