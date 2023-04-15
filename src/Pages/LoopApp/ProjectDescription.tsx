import { Box, Divider, Image, Stack, VStack, Text, BoxProps, HStack, Heading } from '@chakra-ui/react';
import React from 'react';
import { IPageLayoutChild } from '../../Layout/pageLayout';
import LoopBackground from '../../Assets/image/Loop-background.png';
import { motion } from 'framer-motion';
import { Icon } from '@chakra-ui/react';
import {BiArrowBack} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Link as RLink } from 'react-router-dom';

export const MotionBox = motion<BoxProps>(Box);


export const ProjectDescription = ({shouldIgnoreParentPadding}:IPageLayoutChild) => {
	const navigate = useNavigate();

	return(
		<Box>
			<Stack {...(shouldIgnoreParentPadding  && { px:['3', '40px', null, '150px'], pb:'50px' })} spacing={10} justify={'space-between'}>
				<HStack py={[3, 0]} onClick={() => navigate(AppRoutes.home)}>
					<Icon  as={BiArrowBack} color={'#F9F9F9'} />
					<Text color={'#F9F9F9'} fontSize={'14px'}>Back</Text>
				</HStack>
				<Heading fontSize={['30px','40px']} color={'#FFFFFF'}>LOOP APP</Heading>
				<Divider />
				<Stack spacing={[6]} direction={['column', 'row']} align={'flex-start'} justifyContent={'space-between'}>
					<VStack align={'flex-start'}>
						<Text fontSize={['16px', '18px']} color={'#ABA8B1'} fontWeight={700}>DESCRIPTION</Text>
						<Text fontSize={['14px', '16px']} color={'#ABA8B1'} fontWeight={400} w={['auto', '427px']}>
						Loop enables brands to connect with and collect structured feedback from verified customers via QR codes inserted into product packaging.
						Customers scan the QR code and access Loop via a mobile app or web-app through their browser.
						It allows them to provide brands with product relevant feedback in real-time and earn cashback for doing so using a safe, accessible, incentivized and industry agnostic platform.
						</Text>
					</VStack>
					<VStack align={'flex-start'}>
						<Text fontSize={['16px', '18px']} fontWeight={700} color={'#ABA8B1'}>SERVICES</Text>
						<Text fontSize={['14px', '16px']} fontWeight={300} color={'#ABA8B1'}>Product Design </Text>
						<Text fontSize={['14px', '16px']} fontWeight={300} color={'#ABA8B1'}>Branding </Text>
					</VStack>
					<VStack align={'flex-start'}>
						<Text fontSize={['16px', '18px']} fontWeight={700} color={'#ABA8B1'}>CLIENT</Text>
						<Text fontSize={['14px', '16px']} fontWeight={300} color={'#ABA8B1'}>Enzo</Text>
					</VStack>
					<VStack align={'flex-start'}>
						<Text fontSize={['16px', '18px']} fontWeight={700} color={'#ABA8B1'}>LINK</Text>
						<Text as={RLink} 
							to='https://feedtheloop-stage.netlify.app/help' 
							fontSize={['14px', '16px']} 
							fontWeight={300} 
							color={'#ABA8B1'}
							textDecoration={'underline'}
						> 
							Visit website
						</Text>
					</VStack>
				</Stack>
			</Stack>
			
			<Box 
				{...(shouldIgnoreParentPadding && { px: '0', })}
			>
				<Image  src={LoopBackground} />
			</Box>
		</Box>
	);
};