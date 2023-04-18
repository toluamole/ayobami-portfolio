import React from 'react';
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

export const App = () => {

	return(
		<ChakraProvider theme={theme}>
			{/* <ColorModeSwitcher justifySelf="flex-end" /> */}
			<AnimatedCursor innerSize={15} outerSize={40} outerScale={1}  clickables={['button', 'a']} />
			<Global styles={GlobalStyles}/>
			<MainRoutes />
			<Fonts/>
		</ChakraProvider>
	);
	
};
