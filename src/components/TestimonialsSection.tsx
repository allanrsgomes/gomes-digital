import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
 {
  name: 'Priscila Pacheco',
  role: 'Social Media',
  testimonial: 'A Gomes Digital transformou minha presença online! O portfólio que eles criaram foi além das minhas expectativas, combinando design moderno e funcionalidade impecável.',
  image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/testimonials/perfil-pri.png',
 },
 {
  name: 'Marcos Rocha',
  role: 'Gestor de Projetos',
  testimonial: 'O dashboard de clientes é intuitivo e poderoso. Simplificou nosso gerenciamento de dados e otimizou nosso tempo de forma incrível. Uma ferramenta indispensável!',
  image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/testimonials/gestor-produtos.png',
 },
 {
  name: 'Carlos Almeida',
  role: 'CEO da TV House',
  testimonial: 'O trabalho no desenvolvimento da nossa landing page foi excepcional. A equipe entendeu nossas necessidades e entregou uma solução que aumentou nossas conversões significativamente.',
  image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/testimonials/tv-house.png',
 },
 {
  name: 'Allan Gomes',
  role: 'Empreendedor',
  testimonial: 'Fiquei impressionado com o profissionalismo e a agilidade. O agregador de links que desenvolvemos juntos é uma ferramenta fantástica para o meu negócio.',
  image: 'https://ffjbl9i9xsnochut.public.blob.vercel-storage.com/testimonials/allan-gomes.jpg',
 },
];

export function TestimonialsSection() {
 const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  responsive: [
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
    }
   },
   {
    breakpoint: 768,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
    }
   }
  ]
 };

 return (
  <section id="depoimentos" className="py-20 bg-gray-800 text-white">
   <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4 font-fira-code">Depoimentos de Clientes</h2>
    <div className="h-1 w-20 bg-cyan-400 mx-auto mb-12"></div>
    <div className="max-w-4x2 mx-auto">
     <Slider {...settings}>
      {testimonialsData.map((testimonial, index) => (
       <div key={index} className="px-4">
        <div className="bg-gray-900 p-8 rounded-lg shadow-xl mx-auto flex flex-col items-center text-center h-full">
         <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full border-4 border-cyan-400 mb-6"
         />
         <FaQuoteLeft className="text-cyan-400 text-3xl mb-4" />
         <p className="text-gray-300 text-lg italic mb-6 min-h-[150px] flex-grow">
          "{testimonial.testimonial}"
         </p>
         <div className='mt-auto'>
          <h4 className="font-bold text-xl text-white">{testimonial.name}</h4>
          <p className="text-gray-400">{testimonial.role}</p>
         </div>
        </div>
       </div>
      ))}
     </Slider>
    </div>
   </div>
  </section>
 );
}