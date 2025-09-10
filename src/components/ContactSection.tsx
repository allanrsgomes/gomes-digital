export function ContactSection() {
  const whatsappLink = `https://wa.me/5548988591509?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20Gomes%20Digital`;
  return (
    <section id="contato" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 font-fira-code">Entre em Contato</h2>
        <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-center text-gray-300 mb-8">
            Tem alguma pergunta ou proposta? Sinta-se à vontade para me enviar uma mensagem.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors text-center">
            Enviar mensagem
          </a>
        </div>
      </div>
    </section>
  );
}