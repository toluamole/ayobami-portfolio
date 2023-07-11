import { Divider, Flex, Heading, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import {Link as RLink, useNavigate } from 'react-router-dom';
import { useScroll, useTransform } from 'framer-motion';
import { MotionBox } from '../../Components/SelectedWork';

interface INextProjectProps{
    Project: string;
    Route: string;
    shouldIgnoreParentPadding:boolean;
}

export const NextProject = ({shouldIgnoreParentPadding, Project, Route}:INextProjectProps) => {
	const navigate = useNavigate();
	const {scrollYProgress} =useScroll();
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);


	return(
		<MotionBox 
			position={'relative'}
			cursor={'pointer'}
			bg={'#0D0D11'}
			{...(shouldIgnoreParentPadding && { px: '0'})}
			zIndex={-1} 
		>
			<Flex
				cursor={'pointer'}  
				pos={'absolute'}
				onClick={() => navigate(Route)} 
				direction={'column'} 
				justifyContent={'space-between'} 
				alignItems={'center'} w={'full'} h={['330px','539px']} bg={'#0D0D11'} >
				<MotionBox
					style={{y}}
					top={0} bottom={0}
					height={['74vh','60vh']}
					position={'fixed'}
				>
					<Stack pb={'30px'}  spacing={'10px'} justify={'center'} align={'center'}>
						<Text as={RLink} to={Route} fontSize={'18px'} color={'#ABA8B1'} >NEXT PROJECT</Text>
						<Divider border={'1px solid #FFF'} w={'33px'} />
					</Stack>
					<Heading fontSize={['40px','100px']} color={'#F8F8F8'}>{Project}</Heading>
				</MotionBox>
				
			</Flex>
		</MotionBox>
	);
};