import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Missão', href: '#sobre' },
    { title: 'Serviços', href: '#servicos' },
    { title: 'Contato', href: '#contato' },
    { title: 'Portfólio', href: '#portfolio' },
    { title: 'Ferramentas', href: '#ferramentas' },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm text-white p-6 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">

        <a href="/" className="flex items-center">
          <span className="hidden md:inline text-4xl font-bold text-logo">G</span>
          <img 
            src="https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/icon.png" 
            alt="Gomes Digital Logo" 
            className="h-8 md:pl-1 md:pr-1" 
          />
          <span className="hidden md:inline text-4xl font-bold text-logo">mes Digital</span>
        </a>
        
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-lg hover:text-cyan-400 transition-colors">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-900/90 py-4">
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)} className="text-lg hover:text-cyan-400 transition-colors">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}