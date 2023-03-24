import React from 'react';
import { Gallery } from '../Components/Gallery';
import { JumbotronSection } from '../Components/JumbotronSection';
import { SelectedWork } from '../Components/SelectedWork';
import { PageLayout } from '../Layout/pageLayout';

export const Home = () => {
	return(
		<PageLayout 
			jumbotronSection={<JumbotronSection />} 
			backgroundColor={'#0D0D11'}
			display={'block'}
		>
			<SelectedWork  />
			<Gallery />
		</PageLayout>
	);
};