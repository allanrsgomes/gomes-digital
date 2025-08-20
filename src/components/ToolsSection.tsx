// src/components/AboutSection.tsx
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const skills = [
 { icon: <FaReact size={40} />, name: 'React' },
 { icon: <SiTypescript size={40} />, name: 'TypeScript' },
 { icon: <FaJsSquare size={40} />, name: 'JavaScript' },
 { icon: <SiNextdotjs size={40} />, name: 'Next.js' },
 { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS' },
 { icon: <FaNodeJs size={40} />, name: 'Node.js' },
 { icon: <FaHtml5 size={40} />, name: 'HTML5' },
 { icon: <FaCss3Alt size={40} />, name: 'CSS3' },
];

export function ToolsSection() {
 return (
  <section id="ferramentas" className="py-20 bg-gray-800 text-white">
   <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4">Ferramentas</h2>
    <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>
    <div className="flex flex-wrap justify-center gap-8">
     {skills.map((skill) => (
      <div key={skill.name} className="flex flex-col items-center gap-2 p-4 bg-gray-700 rounded-lg w-32 transition-transform hover:-translate-y-2">
       <div className="text-cyan-400">{skill.icon}</div>
       <span className="text-lg">{skill.name}</span>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}