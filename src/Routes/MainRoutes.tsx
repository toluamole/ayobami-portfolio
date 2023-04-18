import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ScrollToTop } from '../Components/ScrollTop';
import { Coinmuinitee } from '../Pages/Coinmunitee/Coinmunitee';
import { Home } from '../Pages/Home';
import { LoopApp } from '../Pages/LoopApp/LoopApp';
import { AppRoutes } from './AppRoutes';


export const MainRoutes = () => {
	const location = useLocation();
	return (
		<ScrollToTop>
			<Routes key={location.pathname}>
				<Route path={AppRoutes.home} element={<Home />} />
				<Route path={AppRoutes.loopApp} element={<LoopApp />}/>
				<Route path={AppRoutes.coinmunitee} element={<Coinmuinitee />}/>
			</Routes>
		</ScrollToTop>	
	);
};