interface ProjectCardClasses {
 readonly container: string;
 readonly featuredContainer: string;
 readonly compactContainer: string;
 readonly imageWrapper: string;
 readonly image: string;
 readonly content: string;
 readonly title: string;
 readonly description: string;
 readonly tagsContainer: string;
 readonly tag: string;
 readonly featuredTag: string;
 readonly metaInfo: string;
 readonly status: string;
 readonly actions: string;
 readonly actionLink: string;
 readonly featuredBadge: string;
}

export const projectCardClasses: ProjectCardClasses = {
 container: "bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col",
 featuredContainer: "ring-2 ring-cyan-400/50 bg-gradient-to-br from-gray-800 to-gray-700 relative",
 compactContainer: "bg-gray-800/50 backdrop-blur-sm",
 imageWrapper: "relative overflow-hidden group",
 image: "w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110",
 content: "p-4 sm:p-6 flex flex-col flex-grow",
 title: "text-xl sm:text-2xl font-bold mb-2 text-white line-clamp-2",
 description: "text-gray-400 text-sm sm:text-base mb-4 flex-grow leading-relaxed",
 tagsContainer: "flex flex-wrap gap-2 mb-4",
 tag: "text-xs font-semibold px-2 py-1 rounded-full transition-colors duration-200",
 featuredTag: "bg-cyan-900/70 text-cyan-300 border border-cyan-400/30",
 metaInfo: "flex items-center justify-between text-xs text-gray-500 mb-3",
 status: "px-2 py-1 rounded-full text-white text-xs font-medium",
 actions: "flex justify-between items-center mt-auto pt-4 border-t border-gray-700/50",
 actionLink: "text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium text-sm hover:underline",
 featuredBadge: "absolute top-3 right-3 bg-cyan-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold z-10",
} as const;

interface SectionClasses {
 readonly section: string;
 readonly container: string;
 readonly title: string;
 readonly subtitle: string;
 readonly divider: string;
 readonly filterContainer: string;
 readonly filterButton: string;
 readonly filterButtonActive: string;
 readonly projectsGrid: string;
 readonly loadMoreButton: string;
}

export const sectionClasses: SectionClasses = {
 section: "py-16 md:py-20 bg-gray-900 text-white",
 container: "container mx-auto px-4 sm:px-6 lg:px-8",
 title: "text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 font-fira-code",
 subtitle: "text-gray-400 text-lg text-center mb-8 max-w-2xl mx-auto",
 divider: "h-1 w-16 sm:w-20 bg-cyan-400 mx-auto mb-8 sm:mb-12",
 filterContainer: "flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12",
 filterButton: "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 bg-gray-700 text-gray-300 hover:bg-gray-600",
 filterButtonActive: "bg-cyan-400 text-gray-900 hover:bg-cyan-500",
 projectsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10",
 loadMoreButton: "mt-12 mx-auto block px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-500 transition-colors duration-200",
} as const;