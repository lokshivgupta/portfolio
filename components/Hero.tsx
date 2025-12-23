import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Software Developer", "C++ Enthusiast", "Web Creator"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-full bg-slate-50 z-0">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl" />
         <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-slate-200/50 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary-600 font-medium mb-4 tracking-wide uppercase text-sm">Welcome to my portfolio</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6">
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">[Your Name]</span>.
        </h1>
        <div className="h-16 md:h-20 mb-8">
          <span className="text-3xl md:text-5xl font-semibold text-slate-600">
            {text}
            <span className="border-r-4 border-primary-500 animate-cursor-blink ml-1">&nbsp;</span>
          </span>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          A versatile developer combining strong computer science fundamentals with creative web implementation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#projects" 
            className="group px-8 py-3.5 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-full hover:bg-slate-50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
           <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110">
             <Github className="h-6 w-6" />
           </a>
           <a href="#" className="text-slate-400 hover:text-blue-700 transition-colors transform hover:scale-110">
             <Linkedin className="h-6 w-6" />
           </a>
           <a href="mailto:email@example.com" className="text-slate-400 hover:text-red-500 transition-colors transform hover:scale-110">
             <Mail className="h-6 w-6" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;