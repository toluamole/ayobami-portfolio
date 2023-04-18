import React from 'react';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface IscrollProp{
    children: React.ReactNode;
}

export const ScrollToTop = ({children}:IscrollProp) => {
	const location = useLocation();
	useEffect(() => {
		window.scroll(0, 0);
	}, [location]);

	return (
		<Box>
			{children}
		</Box>
	);
};