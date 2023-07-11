import React from 'react';
import { CoinmuniteeColors } from '../../Constant/Colors';
import { PageLayout } from '../../Layout/pageLayout';
import { UserExperience } from '../LoopApp/UserExperience';
import { VisualExperience } from '../LoopApp/VisualExperience';
import { DesignProcess } from './DesignProcess';
import { ProjectDescription } from './ProjectDescription';
import { ProjectDetails } from './ProjectDetails';
import userJourney from '../../Assets/image/UserExperience.png';
import userJourneyMobile from '../../Assets/image/userJourneyMobile.png';
import { NextProject } from './NextProject';
import { AppRoutes } from '../../Routes/AppRoutes';

export const Coinmuinitee = () => {
	return(
		<><PageLayout display={'none'}>
			<ProjectDescription shouldIgnoreParentPadding />
			<ProjectDetails />
			<DesignProcess shouldIgnoreParentPadding />
			<VisualExperience
				display='none'
				colors={CoinmuniteeColors}
				shouldIgnoreParentPadding />
			<UserExperience
				shouldIgnoreParentPadding
				borderColor='#58A771'
				userJourneyImage={userJourney}
				userJourneyMobile={userJourneyMobile} />
		</PageLayout><NextProject shouldIgnoreParentPadding ={true} Project='LOOP' Route={AppRoutes.loopApp} /></>
	);
};