const projectsData = [
 {
  title: 'Projeto Incrível 1',
  description: 'Uma breve descrição sobre o projeto, os desafios e as soluções implementadas.',
  image: 'https://via.placeholder.com/400x250', // Substitua pela URL da imagem do seu projeto
  tags: ['React', 'TypeScript', 'Tailwind CSS'],
  liveUrl: '#',
  repoUrl: '#',
 },
 {
  title: 'Landing Page Moderna',
  description: 'Desenvolvimento de uma landing page otimizada para conversão e com design moderno.',
  image: 'https://via.placeholder.com/400x250', // Substitua pela URL da imagem
  tags: ['Next.js', 'Framer Motion'],
  liveUrl: '#',
  repoUrl: '#',
 },
 {
  title: 'E-commerce de Roupas',
  description: 'Plataforma completa de e-commerce com carrinho de compras e integração de pagamentos.',
  image: 'https://via.placeholder.com/400x250', // Substitua pela URL da imagem
  tags: ['React', 'Redux', 'Styled Components'],
  liveUrl: '#',
  repoUrl: '#',
 },
];

function ProjectCard({ project }: { project: typeof projectsData[0] }) {

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-sm font-semibold px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ver Projeto</a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Ver Detalhes</a>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Portfólio</h2>
        <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}