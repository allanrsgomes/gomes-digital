interface ServiceCardClasses {
 readonly container: string;
 readonly featuredContainer: string;
 readonly iconWrapper: string;
 readonly title: string;
 readonly description: string;
 readonly features: string;
 readonly featureItem: string;
 readonly popularBadge: string;
}

export const serviceCardClasses: ServiceCardClasses = {
 container: "bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[350px]",
 featuredContainer: "bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-cyan-400/30 relative",
 iconWrapper: "mb-4 sm:mb-6 transition-transform duration-300 hover:scale-110",
 title: "text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white",
 description: "text-gray-400 text-sm sm:text-base leading-relaxed mb-4",
 features: "mt-4 space-y-2 text-left w-full max-w-xs",
 featureItem: "flex items-center text-sm text-gray-300",
 popularBadge: "absolute -top-3 -right-3 bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold",
} as const;

interface SectionClasses {
 readonly section: string;
 readonly container: string;
 readonly title: string;
 readonly subtitle: string;
 readonly divider: string;
 readonly servicesGrid: string;
 readonly viewAllButton: string;
}

export const sectionClasses: SectionClasses = {
 section: "py-16 md:py-20 bg-gray-900 text-white",
 container: "container mx-auto px-4 sm:px-6 lg:px-8 text-center",
 title: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
 subtitle: "text-gray-400 text-lg mb-8 max-w-2xl mx-auto",
 divider: "h-1 w-16 sm:w-20 bg-cyan-400 mx-auto mb-8 sm:mb-12",
 servicesGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10",
 viewAllButton: "mt-12 inline-flex items-center px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500 transition-colors duration-200",
} as const;