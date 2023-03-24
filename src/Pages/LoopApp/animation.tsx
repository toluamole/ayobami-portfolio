export const container = {
	hidden: {opacity: 0, y: '-1px'},
	show: {
		opacity:1,
		y: 0,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2
		}
	}
};

export const item = {
	hidden: { y: '100%', opacity: 0 },
	show: {y: '0%', opacity: 1, transition: {duration: 0.5, ease: 'easeOut'}}
};