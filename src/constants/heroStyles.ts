interface HeroSectionClasses {
 readonly section: string;
 readonly sectionCentered: string;
 readonly sectionMinimal: string;
 readonly container: string;
 readonly content: string;
 readonly contentCentered: string;
 readonly title: string;
 readonly titleMinimal: string;
 readonly subtitle: string;
 readonly subtitleHighlight: string;
 readonly description: string;
 readonly badges: string;
 readonly badge: string;
 readonly actionsContainer: string;
 readonly imageContainer: string;
 readonly imageContainerCentered: string;
}

export const heroSectionClasses: HeroSectionClasses = {
 section: "min-h-screen flex items-center bg-gray-900 text-white pt-20 sm:pt-24 relative overflow-hidden",
 sectionCentered: "text-center flex-col justify-center",
 sectionMinimal: "min-h-[70vh] pt-16",
 container: "container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10",
 content: "md:w-1/2 mb-10 md:mb-0 text-center md:text-left",
 contentCentered: "w-full max-w-4xl mx-auto text-center",
 title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold my-2 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pb-4",
 titleMinimal: "text-2xl sm:text-3xl md:text-4xl",
 subtitle: "text-base sm:text-lg lg:text-xl text-gray-400 mb-4",
 subtitleHighlight: "text-cyan-400 font-semibold",
 description: "mt-4 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed",
 badges: "flex flex-wrap gap-2 justify-center md:justify-start mt-6 mb-2",
 badge: "bg-cyan-900/30 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full border border-cyan-400/30",
 actionsContainer: "mt-6 sm:mt-8",
 imageContainer: "md:w-1/2 flex justify-center relative",
 imageContainerCentered: "w-full max-w-md mx-auto mt-8",
} as const;

interface HeroActionClasses {
 readonly container: string;
 readonly primary: string;
 readonly secondary: string;
 readonly outline: string;
 readonly base: string;
}

export const heroActionClasses: HeroActionClasses = {
 container: "flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4",
 base: "inline-flex items-center justify-center px-6 sm:px-8 py-3 text-sm sm:text-base font-bold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400",
 primary: "bg-cyan-500 hover:bg-cyan-600 text-gray-900 shadow-lg hover:shadow-xl",
 secondary: "bg-gray-700 hover:bg-gray-600 text-white border border-gray-600",
 outline: "bg-transparent border-2 border-cyan-500 hover:bg-cyan-500 hover:text-gray-900 text-cyan-400 hover:shadow-lg",
} as const;

interface HeroImageClasses {
 readonly container: string;
 readonly image: string;
 readonly imageMinimal: string;
 readonly overlay: string;
}

export const heroImageClasses: HeroImageClasses = {
 container: "relative group",
 image: "w-full h-auto object-contain transition-transform duration-300",
 imageMinimal: "max-w-xs md:max-w-sm",
 overlay: "absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-lg opacity-0 transition-opacity duration-300",
} as const;