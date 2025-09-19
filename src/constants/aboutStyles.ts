interface AboutSectionClasses {
 readonly section: string;
 readonly sectionMinimal: string;
 readonly sectionDetailed: string;
 readonly container: string;
 readonly header: string;
 readonly headerCentered: string;
 readonly headerSplit: string;
 readonly title: string;
 readonly titleMinimal: string;
 readonly subtitle: string;
 readonly divider: string;
 readonly content: string;
 readonly contentGrid: string;
 readonly paragraphContainer: string;
 readonly paragraph: string;
 readonly paragraphEmphasis: string;
}

export const aboutSectionClasses: AboutSectionClasses = {
 section: "py-16 md:py-20 bg-gray-800 text-white",
 sectionMinimal: "py-12 md:py-16",
 sectionDetailed: "py-20 md:py-24",
 container: "container mx-auto px-4 sm:px-6 lg:px-8",
 header: "text-center mb-12",
 headerCentered: "text-center mb-16",
 headerSplit: "text-center md:text-left mb-12",
 title: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-fira-code",
 titleMinimal: "text-2xl sm:text-3xl font-bold mb-3",
 subtitle: "text-lg text-gray-400 mb-4 max-w-2xl mx-auto",
 divider: "h-1 w-16 sm:w-20 bg-cyan-400 mx-auto mb-8 sm:mb-12",
 content: "max-w-4xl mx-auto",
 contentGrid: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
 paragraphContainer: "space-y-6 sm:space-y-8",
 paragraph: "text-gray-300 text-base sm:text-lg leading-relaxed",
 paragraphEmphasis: "text-white font-semibold",
} as const;

interface AboutStatsClasses {
 readonly container: string;
 readonly grid: string;
 readonly card: string;
 readonly icon: string;
 readonly content: string;
 readonly number: string;
 readonly label: string;
 readonly description: string;
}

export const aboutStatsClasses: AboutStatsClasses = {
 container: "mt-16 mb-12",
 grid: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
 card: "text-center p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105",
 icon: "mx-auto mb-4 p-3 rounded-full bg-gray-700/50 w-fit",
 content: "space-y-2",
 number: "text-2xl sm:text-3xl font-bold",
 label: "text-sm sm:text-base font-semibold text-white",
 description: "text-xs sm:text-sm text-gray-400",
} as const;

interface AboutValuesClasses {
 readonly container: string;
 readonly grid: string;
 readonly card: string;
 readonly icon: string;
 readonly content: string;
 readonly title: string;
 readonly description: string;
}

export const aboutValuesClasses: AboutValuesClasses = {
 container: "mt-16",
 grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",
 card: "text-center p-6 bg-gray-900 rounded-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group",
 icon: "mx-auto mb-4 p-3 rounded-full bg-gray-700/50 w-fit group-hover:scale-110 transition-transform duration-300",
 content: "space-y-3",
 title: "text-lg font-bold text-white",
 description: "text-sm text-gray-300 leading-relaxed",
} as const;

interface AboutTimelineClasses {
 readonly container: string;
 readonly timeline: string;
 readonly item: string;
 readonly itemMilestone: string;
 readonly marker: string;
 readonly markerMilestone: string;
 readonly content: string;
 readonly year: string;
 readonly title: string;
 readonly description: string;
 readonly line: string;
}

export const aboutTimelineClasses: AboutTimelineClasses = {
 container: "mt-16",
 timeline: "relative space-y-8",
 item: "relative flex items-start gap-6",
 itemMilestone: "bg-gray-900/30 p-4 rounded-lg border border-gray-700",
 marker: "flex-shrink-0 w-4 h-4 bg-gray-600 rounded-full mt-1",
 markerMilestone: "bg-cyan-400 w-6 h-6 mt-0 ring-4 ring-cyan-400/30",
 content: "flex-1 space-y-2",
 year: "text-sm font-bold text-cyan-400",
 title: "text-lg font-semibold text-white",
 description: "text-sm text-gray-300 leading-relaxed",
 line: "absolute left-2 top-6 bottom-0 w-px bg-gray-600",
} as const;