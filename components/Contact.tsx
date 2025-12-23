import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Let's work together.</h2>
            <p className="text-lg text-slate-400 mb-8 max-w-md">
              I'm actively looking for Junior Developer opportunities. 
              If you have a role that matches my skills in C++ and Web Development, I'd love to chat.
            </p>
            <div className="flex space-x-6">
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300">
                    <Github className="h-6 w-6" />
                </a>
                <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300">
                    <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:hello@example.com" className="p-3 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                </a>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Details</h3>
            <div className="space-y-4">
                <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                    <div>
                        <p className="text-sm font-medium text-slate-400">Email</p>
                        <a href="mailto:hello@example.com" className="text-white hover:text-primary-400 transition-colors">hello@example.com</a>
                    </div>
                </div>
                <div className="flex items-start">
                    <Linkedin className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                    <div>
                        <p className="text-sm font-medium text-slate-400">LinkedIn</p>
                        <a href="#" className="text-white hover:text-primary-400 transition-colors">linkedin.com/in/candidate</a>
                    </div>
                </div>
                 <div className="flex items-start">
                    <Github className="h-5 w-5 text-primary-500 mt-1 mr-3" />
                    <div>
                        <p className="text-sm font-medium text-slate-400">GitHub</p>
                        <a href="#" className="text-white hover:text-primary-400 transition-colors">github.com/candidate</a>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-xs text-slate-500 text-center">
                    &copy; {new Date().getFullYear()} [Candidate Name]. Built with React & Tailwind.
                </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;