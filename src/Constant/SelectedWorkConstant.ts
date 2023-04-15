import Archibald from '../Assets/image/Archibald.png';
import Coinmuinitee from '../Assets/image/Coinmuinitee.png';
import LoopApp from '../Assets/image/Loop-app.png';
import { AppRoutes } from '../Routes/AppRoutes';
import { ISelectedWork } from '../Types/SelectedWorks';

export const images:ISelectedWork[] = [
	{
		id: 0,
		index: '01',
		src: LoopApp,
		title: 'Loop App',
		desc: 'Designing a full experience for customers to give feedbacks on their favorites product while they earn',
		path: AppRoutes.loopApp
	},
	{
		id: 1,
		index: '02',
		src: Archibald,
		title: 'Archibald',
		desc: 'Designing an end-to-end shopping experience for users to shop luxuriously crafted items of all kinds.',
	},
	{
		id: 2,
		index: '03',
		src: Coinmuinitee,
		title: 'Coinmuinitee',
		desc: 'Launching a crypto platform that provides a p2p trading experience for users to safely transact amongst one another.',
		path: AppRoutes.coinmunitee
	},

];