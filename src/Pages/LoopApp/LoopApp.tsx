import React from 'react';
import {  PageLayout } from '../../Layout/pageLayout';
import { Projects } from './Projects';
import { ProjectDescription } from './ProjectDescription';
import { ProjectDetails } from './ProjectDetails';
import { VisualExperience } from './VisualExperience';
import { UserExperience } from './UserExperience';
import { LoopColors } from '../../Constant/Colors';
import userJourney from '../../Assets/image/user-journey.png';
import LoopScreens from '../../Assets/image/Loop-screens.png';
import userJourneyMobile from '../../Assets/image/userJourneyMobile.png';

export const LoopApp = () => {
	return(
		<PageLayout display={'none'}>
			<ProjectDescription shouldIgnoreParentPadding />
			<ProjectDetails />
			<VisualExperience 
				colors={LoopColors} 
				shouldIgnoreParentPadding
			/>
			<UserExperience 
				shouldIgnoreParentPadding
				borderColor='#E54927'
				userJourneyImage={userJourney}
				appScreens={LoopScreens}
				userJourneyMobile={userJourneyMobile}
			/>
			<Projects  />
		</PageLayout>
	);
};