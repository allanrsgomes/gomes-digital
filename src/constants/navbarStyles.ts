interface NavbarClasses {
 readonly nav: string;
 readonly navTransparent: string;
 readonly navSolid: string;
 readonly container: string;
 readonly logoContainer: string;
 readonly logo: string;
 readonly desktopMenu: string;
 readonly navItem: string;
 readonly navLink: string;
 readonly navLinkActive: string;
 readonly navLinkWithBadge: string;
 readonly badge: string;
 readonly mobileMenuButton: string;
 readonly mobileMenuIcon: string;
}

export const navbarClasses: NavbarClasses = {
 nav: "text-white shadow-lg fixed top-0 left-0 w-full transition-all duration-300 ease-in-out",
 navTransparent: "bg-gray-900/80 backdrop-blur-sm",
 navSolid: "bg-gray-900",
 container: "container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 md:py-6",
 logoContainer: "flex items-center",
 logo: "max-w-[100px] sm:max-w-[120px] h-auto transition-transform duration-200 hover:scale-105",
 desktopMenu: "hidden md:flex items-center gap-2 lg:gap-6",
 navItem: "relative",
 navLink: "text-sm lg:text-lg font-medium hover:text-cyan-400 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-800/50",
 navLinkActive: "text-cyan-400 bg-gray-800/30",
 navLinkWithBadge: "relative",
 badge: "absolute -top-1 -right-1 bg-cyan-400 text-gray-900 text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center",
 mobileMenuButton: "md:hidden p-2 hover:bg-gray-800/50 rounded-md transition-colors duration-200",
 mobileMenuIcon: "w-6 h-6 transition-transform duration-200",
} as const;

interface MobileMenuClasses {
 readonly overlay: string;
 readonly container: string;
 readonly backdrop: string;
 readonly panel: string;
 readonly header: string;
 readonly closeButton: string;
 readonly menu: string;
 readonly menuItem: string;
 readonly menuLink: string;
}

export const mobileMenuClasses: MobileMenuClasses = {
 overlay: "md:hidden fixed inset-0 z-50",
 container: "relative h-full",
 backdrop: "absolute inset-0 bg-black/50 backdrop-blur-sm",
 panel: "absolute top-0 right-0 w-64 h-full bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out",
 header: "flex items-center justify-between p-4 border-b border-gray-700",
 closeButton: "p-2 hover:bg-gray-800/50 rounded-md transition-colors duration-200",
 menu: "flex flex-col py-4",
 menuItem: "relative",
 menuLink: "flex items-center px-6 py-3 text-lg font-medium hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200",
} as const;