import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ScrollToTop } from '../Components/ScrollTop';
import { ArchibaldLondon } from '../Pages/ArchibaldLondon';
import { Coinmuinitee } from '../Pages/Coinmunitee/Coinmunitee';
import { Home } from '../Pages/Home';
import { LoopApp } from '../Pages/LoopApp/LoopApp';
import { AppRoutes } from './AppRoutes';


export const MainRoutes = () => {
	const location = useLocation();
	return (
		<ScrollToTop>
			<AnimatePresence >
			
				<Routes key={location.pathname}>
					<Route path={AppRoutes.home} element={<Home />} />
					<Route path={AppRoutes.loopApp} element={<LoopApp />}/>
					<Route path={AppRoutes.archibaldLondon} element={<ArchibaldLondon />}/>
					<Route path={AppRoutes.coinmunitee} element={<Coinmuinitee />}/>
				</Routes>
			</AnimatePresence>
		</ScrollToTop>
	);
};