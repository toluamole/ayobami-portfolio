import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Footer } from '../Components/Footer';
import { Navigation } from '../Components/Navigation';
import { Preloader } from '../Components/Preloader';
import { MotionBox } from '../Components/SelectedWork';

export interface IPageLayoutChild {
	shouldIgnoreParentPadding?: boolean;
  }

interface IPageLayoutProps{
    jumbotronSection?: React.ReactNode;
    children: React.ReactNode;
	backgroundColor?: string;
	display: 'none'| 'block' | 'flex';
}

export const PageLayout = ({jumbotronSection, children, backgroundColor, display}: IPageLayoutProps) => {
	// eslint-disable-next-line 
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};
	return (
		<MotionBox 
			overflowX={'hidden'} 
			bg={'#2C2C30'}
			// initial={{y: '100%'}}
			// animate={{y: '0'}}
			// transition={{duration: 0.5, ease: 'easeOut'}}
			// exit={{opacity: 1}}
		>
			<Box
				bg={backgroundColor}
				bgSize='cover'
				px={['2', '10']}
				height={'100%'}
			>
				<Navigation display={display} />
				<Box  maxW={'1440px'} m={'0 auto'}>{jumbotronSection}</Box>
			</Box>
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					if (child.props.shouldIgnoreParentPadding) {
						return (
							<Box   maxW={'1440px'} m={'0 auto'} py={['20px','80px']}>
								{child}
							</Box>
						);
					}

					return (
						<Box  maxW={'1440px'} m={'0 auto'}  px={['3', '40px', null, '100px']} py={['20px','60px']} >
							<Preloader onComplete={handleLoadingComplete} /> 
							{child}
						</Box>
					);
				}
				return child;
			})}
			<Footer/>
		</MotionBox>
	);
};