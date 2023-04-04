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
		desc: 'Designing a full experience for customers to give feedbacks on their favorites product while they earn',
	},
	{
		id: 2,
		index: '03',
		src: Coinmuinitee,
		title: 'Coinmuinitee',
		desc: 'Designing a full experience for customers to give feedbacks on their favorites product while they earn',
		path: AppRoutes.coinmunitee
	},

];