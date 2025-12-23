import React from 'react';
import { Code2, Globe, Terminal } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-6 rounded-2xl">
                 <Terminal className="h-8 w-8 text-primary-600 mb-3" />
                 <h3 className="font-semibold text-slate-900">Backend Logic</h3>
                 <p className="text-sm text-slate-600 mt-2">C++, Algorithms, Data Structures</p>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl">
                 <Globe className="h-8 w-8 text-primary-600 mb-3" />
                 <h3 className="font-semibold text-slate-900">Web Dev</h3>
                 <p className="text-sm text-slate-600 mt-2">HTML, CSS, JS, React</p>
               </div>
               <div className="col-span-2 bg-slate-50 p-6 rounded-2xl flex items-center">
                 <div className="mr-4">
                    <Code2 className="h-8 w-8 text-primary-600" />
                 </div>
                 <div>
                    <h3 className="font-semibold text-slate-900">Problem Solver</h3>
                    <p className="text-sm text-slate-600">Optimizing memory & rendering pixels</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                As a recent Computer Science graduate, I bridge the gap between robust system architecture and engaging user experiences. My journey began with mastering the intricacies of <strong>C++, Data Structures, and OOP</strong>, cultivating a deep appreciation for performance and logic.
              </p>
              <p>
                I've since expanded my toolkit to include modern web technologies, translating backend efficiency into responsive front-end designs. Whether optimizing memory in a task scheduler or crafting interactive web games, I am driven by a passion for solving complex problems with clean, maintainable code.
              </p>
              <p>
                I am eager to bring my versatility and dedication to a dynamic development team where I can continue to learn and contribute to impactful software solutions.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                Download Resume <span aria-hidden="true" className="ml-2">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;