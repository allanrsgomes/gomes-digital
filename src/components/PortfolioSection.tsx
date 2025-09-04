const projectsData = [
  {
    title: 'Portfólio (Priscila Pacheco)',
    description: 'Portfólio focado em apresentar serviços e pacotes de uma profissional de Social Media.',
    image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/portfolio/thumbnail-pripacheco.png',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
    liveUrl: 'https://priscila-pacheco.vercel.app',
    repoUrl: 'https://priscila-pacheco.vercel.app',
  },
  {
    title: 'Landing Page (TV House)',
    description: 'Landing page para uma empresa que presta serviços de streaming, como canais de TV, filmes e séries.',
    image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/portfolio/thumbnail-sitetvhouse.png',
    tags: ['React', 'Next.js', 'Node.js'],
    liveUrl: 'https://tv-house-site.vercel.app',
    repoUrl: 'https://tv-house-site.vercel.app',
  },
  {
    title: 'Agrupador de Links (DevLinks)',
    description: 'Plataforma para agrupar e compartilhar links, conteúdos e redes sociais de maneira organizada através de um link.',
    image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/portfolio/thumbnail-devlinks.png',
    tags: ['JavaScript', 'Github', 'Figma'],
    liveUrl: 'https://devlinks-allan.vercel.app',
    repoUrl: 'https://devlinks-allan.vercel.app',
  },
  {
    title: 'Validação de Cartão (RocketPay)',
    description: 'Ferramenta de validação de cartões de crédito para validar se um cartão é válido.',
    image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/portfolio/validationcard.png',
    tags: ['HTML', 'CSS', 'Vite'],
    liveUrl: 'https://card-validation-umber.vercel.app',
    repoUrl: 'https://card-validation-umber.vercel.app',
  },
  {
    title: 'Landing Page (Black Friday)',
    description: 'Página moderna e responsiva com design otimizado para conversão e com objetivo de captação de leads.',
    image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/portfolio/thumbnail-blackfriday.png',
    tags: ['Angular', 'Material UI', 'Figma', 'Node.js'],
    liveUrl: 'https://www.panvel.com/panvel/lp/black-friday',
    repoUrl: 'https://www.panvel.com/panvel/lp/black-friday',
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