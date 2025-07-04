import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine class names with Tailwind's merge functionality
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 