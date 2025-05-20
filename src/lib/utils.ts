import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names using clsx and tailwind-merge.
 * This function allows you to conditionally apply class names and merge them.
 * @author sxperlinx
 *
 * @param {...ClassValue[]} input - The class names to merge.
 * @returns {string} The merged class names.
 */
export function cn(...input: ClassValue[]): string {
	return twMerge(clsx(input));
}
