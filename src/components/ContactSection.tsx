export function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Formulário enviado! (Ainda não funcional)');
  };

  return (
    <section id="contato" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Entre em Contato</h2>
        <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-300 mb-8">
            Tem alguma pergunta ou proposta? Sinta-se à vontade para me enviar uma mensagem.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                required 
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-cyan-500 focus:border-cyan-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}