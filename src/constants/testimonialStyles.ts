interface TestimonialCardClasses {
 readonly container: string;
 readonly image: string;
 readonly quoteIcon: string;
 readonly testimonial: string;
 readonly clientInfo: string;
 readonly name: string;
 readonly role: string;
}

export const testimonialCardClasses: TestimonialCardClasses = {
 container: "bg-gray-900 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl h-full flex flex-col items-center text-center min-h-[400px] sm:min-h-[450px] transition-transform duration-300 hover:scale-105",
 image: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-4 border-cyan-400 mb-4 sm:mb-6 object-cover",
 quoteIcon: "text-cyan-400 text-2xl sm:text-3xl mb-3 sm:mb-4",
 testimonial: "text-gray-300 text-sm sm:text-base md:text-lg italic mb-4 sm:mb-6 flex-grow leading-relaxed px-2",
 clientInfo: "mt-auto",
 name: "font-bold text-lg sm:text-xl text-white mb-1",
 role: "text-gray-400 text-sm sm:text-base",
} as const;

interface SectionClasses {
 readonly section: string;
 readonly container: string;
 readonly title: string;
 readonly divider: string;
 readonly swiperContainer: string;
 readonly slide: string;
 readonly navigationButton: string;
}

export const sectionClasses: SectionClasses = {
 section: "py-16 md:py-20 bg-gray-800 text-white",
 container: "container mx-auto px-4 sm:px-6 lg:px-8 text-center",
 title: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
 divider: "h-1 w-16 sm:w-20 bg-cyan-400 mx-auto mb-8 sm:mb-12",
 swiperContainer: "max-w-7xl mx-auto",
 slide: "px-2 sm:px-4",
 navigationButton: "!text-cyan-400 !text-2xl after:!text-2xl hidden lg:flex",
} as const;