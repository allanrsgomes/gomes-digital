import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://instagram.com/gomesdigitals" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaInstagram size={28} />
          </a>
          <a href="https://linkedin.com/in/allanrsgomes" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/allanrsgomes" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
            <FaGithub size={28} />
          </a>
        </div>
        <p className="mt-2 text-sm">Copyright &copy;{currentYear}. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">Feito com ❤️ por Gomes Digital</p>
      </div>
    </footer>
  );
}