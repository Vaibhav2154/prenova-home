import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Maternal care color palette
export const maternalColors = {
  primary: "hsl(340 82% 52%)",
  secondary: "hsl(24 100% 92%)",
  accent: "hsl(340 20% 95%)",
  peach: "hsl(24 100% 85%)",
  cream: "hsl(24 50% 97%)",
  sage: "hsl(120 20% 85%)",
  lavender: "hsl(260 30% 90%)",
} as const

// Animation variants for consistent usage
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Common component styles
export const cardStyles = {
  base: "bg-white/80 backdrop-blur-sm border border-pink-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300",
  elevated: "bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200",
  glass: "bg-white/20 backdrop-blur-md border border-white/30 rounded-xl",
}

export const buttonStyles = {
  primary: "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
  secondary: "border-2 border-pink-500 text-pink-600 hover:bg-pink-50 font-medium px-6 py-3 rounded-lg transition-all duration-200",
  ghost: "text-pink-600 hover:bg-pink-50 font-medium px-4 py-2 rounded-lg transition-all duration-200",
}

export const sectionStyles = {
  padding: "py-16 md:py-24 lg:py-32",
  paddingSmall: "py-12 md:py-16 lg:py-20",
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
}
