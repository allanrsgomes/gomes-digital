interface ContactSectionClasses {
 readonly section: string;
 readonly sectionMinimal: string;
 readonly container: string;
 readonly header: string;
 readonly title: string;
 readonly titleMinimal: string;
 readonly subtitle: string;
 readonly divider: string;
 readonly content: string;
 readonly contentMinimal: string;
 readonly description: string;
}

export const contactSectionClasses: ContactSectionClasses = {
 section: "py-16 md:py-20 bg-gray-900 text-white",
 sectionMinimal: "py-12 md:py-16",
 container: "container mx-auto px-4 sm:px-6 lg:px-8",
 header: "text-center mb-12",
 title: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-fira-code",
 titleMinimal: "text-2xl sm:text-3xl font-bold",
 subtitle: "text-lg text-gray-400 mb-2",
 divider: "h-1 w-16 sm:w-20 bg-cyan-400 mx-auto mb-8 sm:mb-12",
 content: "max-w-4xl mx-auto",
 contentMinimal: "max-w-2xl mx-auto text-center",
 description: "text-center text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto",
} as const;

interface ContactMethodClasses {
 readonly grid: string;
 readonly gridMinimal: string;
 readonly card: string;
 readonly cardMinimal: string;
 readonly icon: string;
 readonly content: string;
 readonly name: string;
 readonly description: string;
 readonly button: string;
 readonly buttonPrimary: string;
 readonly buttonSecondary: string;
 readonly buttonOutline: string;
}

export const contactMethodClasses: ContactMethodClasses = {
 grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
 gridMinimal: "flex flex-col sm:flex-row justify-center gap-4",
 card: "bg-gray-800 p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600",
 cardMinimal: "bg-gray-800/50 p-4 rounded-lg",
 icon: "mx-auto mb-4 p-3 rounded-full bg-gray-700/50 w-fit transition-colors duration-200",
 content: "mb-6",
 name: "text-xl font-bold mb-2 text-white",
 description: "text-gray-400 text-sm mb-4",
 button: "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2",
 buttonPrimary: "text-white shadow-lg",
 buttonSecondary: "text-white shadow-lg",
 buttonOutline: "border-2 bg-transparent",
} as const;

interface ContactInfoClasses {
 readonly container: string;
 readonly infoGrid: string;
 readonly infoItem: string;
 readonly infoIcon: string;
 readonly infoContent: string;
 readonly infoTitle: string;
 readonly infoText: string;
 readonly socialContainer: string;
 readonly socialTitle: string;
 readonly socialGrid: string;
 readonly socialLink: string;
}

export const contactInfoClasses: ContactInfoClasses = {
 container: "bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl",
 infoGrid: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
 infoItem: "flex items-start gap-4",
 infoIcon: "p-2 rounded-lg bg-cyan-500/20 text-cyan-400 flex-shrink-0 mt-1",
 infoContent: "flex-1",
 infoTitle: "font-semibold text-white mb-1",
 infoText: "text-gray-300 text-sm",
 socialContainer: "border-t border-gray-700 pt-6",
 socialTitle: "text-lg font-semibold text-white mb-4 text-center",
 socialGrid: "flex justify-center gap-4",
 socialLink: "p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200 group",
} as const;