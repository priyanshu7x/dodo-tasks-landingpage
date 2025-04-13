
import React from 'react';
import { Bird, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Bird className="h-8 w-8 text-dodo-500" />
              <span className="text-xl font-bold text-gray-800">Dodo Tasks</span>
            </div>
            <p className="text-gray-600 mb-4">
              Your smart task assistant that lives inside Slack, making task management feel natural and effortless.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-dodo-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dodo-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dodo-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-dodo-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Slack App Directory</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dodo Tasks. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-600 hover:text-dodo-500 transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
