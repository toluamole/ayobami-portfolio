import React, { useState} from 'react';
import {
	ChakraProvider,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { theme } from './Theme/BaseTheme';
import {Fonts} from './Theme/Fonts';
import { Global } from '@emotion/react';
import { GlobalStyles } from './Theme/GlobalStyles';
import AnimatedCursor from 'react-animated-cursor';
import { MainRoutes } from './Routes/MainRoutes';
import { Preloader } from './Components/Preloader';

export const App = () => {
	// eslint-disable-next-line 
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	return(
		<ChakraProvider theme={theme}>
			{/* <ColorModeSwitcher justifySelf="flex-end" /> */}
			<Preloader onComplete={handleLoadingComplete} />
			<MainRoutes />
			{/* {isLoading && <Preloader onComplete={handleLoadingComplete} />} */}
			<AnimatedCursor innerSize={15} outerSize={40} outerScale={1}  clickables={['button', 'a']} />
			<Global styles={GlobalStyles}/>
			{/* {
				!isLoading && <MainRoutes />
			} */}
			
			<Fonts/>
		</ChakraProvider>
	);
	
};
