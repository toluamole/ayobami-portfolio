import Archibald from '../Assets/image/Archibald.png';
import Coinmuinitee from '../Assets/image/Coinmuinitee.png';
import CodeGraph from '../Assets/image/CodeGraph.png';
import LoopApp from '../Assets/image/Loop-app.png';
import { AppRoutes } from '../Routes/AppRoutes';
import { ISelectedWork } from '../Types/SelectedWorks';

export const images:ISelectedWork[] = [
	{
		id: 1,
		index: '01',
		src: CodeGraph,
		title: 'CodeGraph',
		desc: 'Integrating an end to end experience for open AI database for decentralised marketplace',
		// path: AppRoutes.coinmunitee
	},
	{
		id: 2,
		index: '02',
		src: LoopApp,
		title: 'Loop App',
		desc: 'Designing a full experience for customers to give feedbacks on their favorites product while they earn',
		path: AppRoutes.loopApp
	},
	{
		id: 3,
		index: '03',
		src: Archibald,
		title: 'Archibald',
		desc: 'Designing an end-to-end shopping experience for users to shop luxuriously crafted items of all kinds.',
	},
	{
		id: 4,
		index: '04',
		src: Coinmuinitee,
		title: 'Coinmuinitee',
		desc: 'Launching a crypto platform that provides a p2p trading experience for users to safely transact amongst one another.',
		path: AppRoutes.coinmunitee
	},
];