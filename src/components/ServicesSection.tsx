import { FaCode, FaPaintBrush, FaRocket } from 'react-icons/fa';

const services = [
 {
  icon: <FaCode size={40} className="text-cyan-400" />,
  title: "Desenvolvimento Web",
  description: "Criamos sites e sistemas web robustos, escaláveis e otimizados para performance, utilizando as tecnologias mais modernas do mercado."
 },
 {
  icon: <FaPaintBrush size={40} className="text-cyan-400" />,
  title: "UI/UX Design",
  description: "Projetamos interfaces intuitivas e atraentes, focadas na experiência do usuário para garantir engajamento e conversão."
 },
 {
  icon: <FaRocket size={40} className="text-cyan-400" />,
  title: "Otimização e SEO",
  description: "Melhoramos a velocidade do seu site e aplicamos as melhores práticas de SEO para garantir que seu negócio seja encontrado no Google."
 }
];

export function ServicesSection() {
 return (
  <section id="servicos" className="py-20 bg-gray-900 text-white">
   <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4 font-fira-code">Serviços</h2>
    <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
     {services.map((service) => (
      <div key={service.title} className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-transform hover:scale-105 flex flex-col items-center justify-center text-center">
       <div className="mb-4">{service.icon}</div>
       <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
       <p className="text-gray-400">{service.description}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
}