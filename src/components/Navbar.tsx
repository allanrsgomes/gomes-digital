import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Missão', href: '#sobre' },
    { title: 'Serviços', href: '#servicos' },
    { title: 'Ferramentas', href: '#ferramentas' },
    { title: 'Portfólio', href: '#portfolio' },
    { title: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm text-white p-6 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo da Empresa */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Gomes Digital Solutions Logo" className="h-16" />
        </a>

        {/* Links para Desktop */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-lg hover:text-cyan-400 transition-colors">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Botão do Menu Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
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