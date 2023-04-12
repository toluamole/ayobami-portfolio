import { extendTheme } from '@chakra-ui/react';
// import { createBreakpoints } from '@chakra-ui/theme-tools';

export const breakpoints = {
	sm: '30em',
	md: '48em',
	lg: '62em',
	xl: '80em',
	xxl: '900px',
	tablet: '820px'
};

export const theme = extendTheme({
	breakpoints,
	fonts: {
		heading: 'Cosi Azure',
		body: 'Neue Haas Grotesk Text Pro',
	},
});