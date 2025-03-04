import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";


const spacing = {
  // Theme-specific spacing
  // Add here
  'header': 'var(--header-height)',
  'vh-less-header': 'calc(100vh - var(--header-height))',
  // General spacing
  // Add more granular measurements as needed
  'thin': '.125rem',
   // fractions
  '1/2': 100.0 * 1/2 + '%',
  '1/3': 100.0 * 1/3 + '%',
  '2/3': 100.0 * 2/3 + '%',
  '1/4': 100.0 * 1/4 + '%',
  '2/4': 100.0 * 2/4 + '%',
  '3/4': 100.0 * 3/4 + '%',
  '1/6': 100.0 * 1/6 + '%',
  '2/6': 100.0 * 2/6 + '%',
  '3/6': 100.0 * 3/6 + '%',
  '4/6': 100.0 * 4/6 + '%',
  '5/6': 100.0 * 5/6 + '%',
  '1/8': 100.0 * 1/8 + '%',
  '2/8': 100.0 * 2/8 + '%',
  '3/8': 100.0 * 3/8 + '%',
  '4/8': 100.0 * 4/8 + '%',
  '5/8': 100.0 * 5/8 + '%',
  '6/8': 100.0 * 6/8 + '%',
  '7/8': 100.0 * 7/8 + '%',
  // percents
  '0-per': '0%',
  '5-per': '5%',
  '10-per': '10%',
  '15-per': '15%',
  '20-per': '20%',
  '25-per': '25%',
  '30-per': '30%',
  '35-per': '35%',
  '40-per': '40%',
  '45-per': '45%',
  '50-per': '50%',
  '55-per': '55%',
  '60-per': '60%',
  '65-per': '65%',
  '70-per': '70%',
  '75-per': '75%',
  '80-per': '80%',
  '85-per': '85%',
  '90-per': '90%',
  '95-per': '95%',
};

for (let i = 0; i < 101; i++) {
  spacing[i] = `${i/4.000}rem`
}

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    lineHeight: {
      tight: '1.1',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      white: '#ffffff',
      green: '#33471F',
      black: '#000000',
    },
    fontFamily: {
      sans: ["var(--font-circular)", 'sans-serif'],
      serif: ['var(--font-serif)', 'serif'],
    },
    fontSize: {
      '8': '0.5rem',
      '10': '0.625rem',
      '12': '0.75rem',
      '14': '0.875rem',
      '16': ['1rem', 'normal'],
      '19': '1.1875rem',
      '22': '1.375rem',
      '24': '1.5rem',
      '36': '2.25rem',
      '48': '3rem',
      '64': '4rem'
    },
    extend: {
      spacing: spacing,
      minHeight: spacing,
      maxHeight: spacing
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
