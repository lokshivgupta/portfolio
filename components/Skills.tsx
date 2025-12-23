import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    languages: ["C++", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Java", "Python"],
    frameworks: ["React", "Tailwind CSS", "Node.js", "Express"],
    tools: ["Git & GitHub", "VS Code", "Unix/Linux", "Webpack", "Vite", "Figma"],
    concepts: ["Data Structures", "Algorithms", "OOP", "Memory Management", "Responsive Design", "REST APIs"]
  };

  return (
    <section id="skills" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary-600 uppercase tracking-wider border-b border-slate-100 pb-2">
                            {category}
                        </h3>
                        <ul className="space-y-2">
                            {items.map(item => (
                                <li key={item} className="flex items-center text-slate-700">
                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;