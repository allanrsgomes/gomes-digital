export function HeroSection() {

  const whatsappLink = `https://wa.me/5548988591509?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20Gomes%20Digital`;

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900 text-white pt-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">

        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold my-2 leading-tight">
            Gomes Digital
          </h1>
          <span className="text-lg text-gray-400">Construindo o <span className="text-cyan-400">Futuro Digital</span> do Seu Negócio</span>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Na Gomes Digital, transformamos suas ideias em soluções web de alta performance. Criamos sites, landing pages e sistemas sob medida que impulsionam resultados e encantam usuários.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#portfolio" className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-center">
              Veja nosso Portfólio
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              className="bg-transparent border-2 border-cyan-500 hover:bg-cyan-500 hover:text-gray-900 text-cyan-400 font-bold py-3 px-8 rounded-lg transition-colors text-center"
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src="https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/avatar.png" alt="Ícone Gomes Digital" className="w-200 h-133 md:w-200 md:h-133" />
        </div>

      </div>
    </section>
  );
}