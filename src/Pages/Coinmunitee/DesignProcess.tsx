import { Heading, Stack, Text, Image } from '@chakra-ui/react';
import React, { useRef } from 'react';
import roadmap from '../../Assets/svg/roadmap.svg';
import CoinmuniteeApp from '../../Assets/image/CoinmuniteeApp.png';
import { IPageLayoutChild } from '../../Layout/pageLayout';
import {  useScroll, useTransform } from 'framer-motion';
import { MotionBox } from '../../Components/SelectedWork';

export const DesignProcess = ({shouldIgnoreParentPadding}:IPageLayoutChild) => {
	const targetRef = useRef<HTMLDivElement>(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end end']
	});
	
	const clipPath = useTransform(scrollYProgress, (value) => {
		return value ? ' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'  :  'polygon(45% 20%, 55% 20%, 55% 80%, 45% 80%)';
		
	});
	
	return(
		<Stack spacing={10}>
			<Stack spacing={10}  {...(shouldIgnoreParentPadding  && { px:['3','150px'], py:'50px' })}>
				<Heading fontSize={['24px','36px']} color='#ABA8B1'>DESIGN PROCESS</Heading>
				<Stack direction={['column','row']} spacing={[4, 0]}
					position={'relative'} left={[null,'8%']}   
					justify={'space-around'} 
					align={['start','center']}
				>
					<Stack>
						<Heading color='#8B7B67'>O2</Heading>
						<Text color={'#58A771'} fontSize={['16px','18px']} fontWeight={700}>User flow</Text>
						<Text color={'#ABA8B1'} fontSize={['14px','16px']} w={['auto', '193px']}>Create user flow for key functions</Text>
					</Stack>
					<Stack>
						<Heading color='#8B7B67'>O4</Heading>
						<Text color={'#58A771'} fontSize={['16px','18px']} fontWeight={700}>Design System</Text>
						<Text color={'#ABA8B1'} fontSize={['14px','16px']} w={['auto', '193px']}>Design interface of application and develop Styleguide</Text>
					</Stack>
				</Stack>
				<Image src={roadmap} />
				<Stack 
					direction={['column','row']} 
					justifyContent={'space-between'} 
					spacing={[4, 0]}
				>
					<Stack direction={'column'}>
						<Heading color='#8B7B67'>O1</Heading>
						<Text color={'#58A771'} fontSize={['16px','18px']} fontWeight={700}>Research & Ideate</Text>
						<Text color={'#ABA8B1'} fontSize={['14px','16px']}  w={['auto', '193px']}>Quantitaive and Qualitative surveys and research</Text>
					</Stack>
					<Stack position={'relative'} left={['','6%']} direction={'column'}>
						<Heading color='#8B7B67'>O3</Heading>
						<Text color={'#58A771'} fontSize={['16px','18px']} fontWeight={700}>Design System</Text>
						<Text color={'#ABA8B1'} fontSize={['14px','16px']}  w={['auto', '193px']}>Create Wireframes</Text>
					</Stack>
					<Stack textAlign={[null, 'right']} direction={'column'}>
						<Heading color='#8B7B67'>O5</Heading>
						<Text color={'#58A771'} fontSize={['16px','18px']} fontWeight={700}>Clickable Prototype</Text>
						<Text color={'#ABA8B1'} fontSize={['14px','16px']}  w={['auto', '193px']}>Interactive model of future product</Text>
					</Stack>
				</Stack>
			</Stack>
			<MotionBox 
				ref={targetRef}
				style={{clipPath, transition: '0.5s ease'}}
				{...(shouldIgnoreParentPadding && { px: '0', })}
			>
				<Image src={CoinmuniteeApp} />
			</MotionBox>
		</Stack>
	);
};