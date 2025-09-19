import type { NavLink } from '../types/navigation';

export const navLinksData: NavLink[] = [
 {
  id: 'sobre',
  title: 'Missão',
  href: '#sobre',
  isExternal: false,
 },
 {
  id: 'servicos',
  title: 'Serviços',
  href: '#servicos',
  isExternal: false,
 },
 {
  id: 'depoimentos',
  title: 'Depoimentos',
  href: '#depoimentos',
  isExternal: false,
 },
 {
  id: 'portfolio',
  title: 'Portfólio',
  href: '#portfolio',
  isExternal: false,
 },
 {
  id: 'contato',
  title: 'Contato',
  href: '#contato',
  isExternal: false,
  badge: 'Novo',
 },
 {
  id: 'ferramentas',
  title: 'Ferramentas',
  href: '#ferramentas',
  isExternal: false,
 },

] as const;

export const mainNavLinksData: NavLink[] = navLinksData.filter(link =>
 ['sobre', 'servicos', 'portfolio', 'contato'].includes(link.id)
);

export const extendedNavLinksData: NavLink[] = [
 ...navLinksData,
 {
  id: 'blog',
  title: 'Blog',
  href: '/blog',
  isExternal: true,
 },
] as const;