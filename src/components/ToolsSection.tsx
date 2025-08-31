import {
 FaReact,
 FaJsSquare,
 FaHtml5,
 FaCss3Alt,
 FaNodeJs,
 FaSass,
 FaGitAlt,
 FaFigma,
 FaGithub,
 FaAngular,
} from 'react-icons/fa';
import {
 SiTypescript,
 SiTailwindcss,
 SiNextdotjs,
 SiVite,
 SiRedux,
 SiExpress,
 SiPrisma,
 SiPostgresql,
 SiMongodb,
 SiFirebase,
 SiJest,
 SiCypress,
 SiVercel,
 SiNgrx,
} from 'react-icons/si';

const skills = [
 { icon: <FaJsSquare size={40} />, name: 'JavaScript' },
 { icon: <SiTypescript size={40} />, name: 'TypeScript' },
 { icon: <FaHtml5 size={40} />, name: 'HTML5' },
 { icon: <FaCss3Alt size={40} />, name: 'CSS3' },
 { icon: <FaReact size={40} />, name: 'React' },
 { icon: <SiNextdotjs size={40} />, name: 'Next.js' },
 { icon: <FaAngular size={40} />, name: 'Angular' }, // Adicionado
 { icon: <SiVite size={40} />, name: 'Vite' },
 { icon: <SiRedux size={40} />, name: 'Redux' },
 { icon: <SiNgrx size={40} />, name: 'NgRx' },
 { icon: <SiTailwindcss size={40} />, name: 'Tailwind CSS' },
 { icon: <FaSass size={40} />, name: 'Sass' },
 { icon: <FaNodeJs size={40} />, name: 'Node.js' },
 { icon: <SiExpress size={40} />, name: 'Express' },
 { icon: <SiPrisma size={40} />, name: 'Prisma' },
 { icon: <SiPostgresql size={40} />, name: 'PostgreSQL' },
 { icon: <SiMongodb size={40} />, name: 'MongoDB' },
 { icon: <SiFirebase size={40} />, name: 'Firebase' },
 { icon: <SiJest size={40} />, name: 'Jest' },
 { icon: <SiCypress size={40} />, name: 'Cypress' },
 { icon: <FaGitAlt size={40} />, name: 'Git' },
 { icon: <FaGithub size={40} />, name: 'GitHub' },
 { icon: <SiVercel size={40} />, name: 'Vercel' },
 { icon: <FaFigma size={40} />, name: 'Figma' },
];

export function ToolsSection() {
 return (
  <section id="ferramentas" className="py-20 bg-gray-800 text-white">
   <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4">Ferramentas e Tecnologias</h2>
    <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
     {skills.map((skill) => (
      <div
       key={skill.name}
       className="group flex flex-col items-center justify-center gap-2 p-4 bg-gray-700/50 rounded-lg w-32 h-32 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2"
       title={skill.name}
      >
       <div className="text-cyan-400 transition-transform duration-300 group-hover:scale-110">
        {skill.icon}
       </div>
       <span className="text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {skill.name}
       </span>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}