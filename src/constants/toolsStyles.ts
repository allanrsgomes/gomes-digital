interface SkillCardClasses {
 readonly container: string;
 readonly iconWrapper: string;
 readonly name: string;
}

export const skillCardClasses: SkillCardClasses = {
 container: "group flex flex-col items-center justify-center gap-2 p-4 bg-gray-700/50 rounded-lg w-32 h-32 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 cursor-pointer",
 iconWrapper: "text-cyan-400 transition-transform duration-300 group-hover:scale-110",
 name: "text-lg transition-opacity duration-300 text-center leading-tight",
} as const;

interface SectionClasses {
 readonly section: string;
 readonly container: string;
 readonly title: string;
 readonly divider: string;
 readonly skillsGrid: string;
}

export const sectionClasses: SectionClasses = {
 section: "py-16 md:py-20 bg-gray-800 text-white",
 container: "container mx-auto px-4 sm:px-6 lg:px-8 text-center",
 title: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
 divider: "h-1 w-16 sm:w-20 bg-cyan-400 mx-auto mb-8 sm:mb-12",
 skillsGrid: "flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8",
} as const;