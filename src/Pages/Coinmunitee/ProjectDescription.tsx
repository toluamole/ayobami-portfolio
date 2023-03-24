import { Box, Divider, Heading, Image, Stack, VStack, Text, HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { IPageLayoutChild } from '../../Layout/pageLayout';
import CoinmuniteePages from '../../Assets/image/CoinmuniteePages.png';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../Routes/AppRoutes';

export const ProjectDescription = ({shouldIgnoreParentPadding}:IPageLayoutChild) => {
	const navigate = useNavigate();

	return(
		<Box>
			<Box>
				<Stack {...(shouldIgnoreParentPadding  && { px:['3', '40px', null, '150px'], pb:'80px' })} spacing={10} justify={'space-between'}>
					<HStack py={[3, 0]} onClick={() => navigate(AppRoutes.home)}>
						<Icon  as={BiArrowBack} color={'#F9F9F9'} />
						<Text color={'#F9F9F9'} fontSize={'14px'}>Back</Text>
					</HStack>
					<Heading fontSize={['30px','40px']} color={'#FFFFFF'}>COINMUNITEE</Heading>
					<Divider />
					<Stack spacing={[6]} direction={['column', 'row']} align={'flex-start'} justifyContent={'space-between'}>
						<VStack align={'flex-start'}>
							<Text fontSize={['16px', '18px']} color={'#ABA8B1'} fontWeight={700}>DESCRIPTION</Text>
							<Text fontSize={['14px', '16px']} color={'#ABA8B1'} fontWeight={400} w={['auto', '427px']}>
								Coinmunitee is an app that connects approved crypto traders together. 
								It is an online crypto trading platform that is made for anyone interested in making money trading all cryptocurrencies.
								The aim is to connect buyers and sellers and ensure they trade safely on the app with both parties getting their respective assets instantaneously.
							</Text>
						</VStack>
						<VStack align={'flex-start'}>
							<Text fontSize={['16px', '18px']} fontWeight={700} color={'#ABA8B1'}>SERVICES</Text>
							<Text fontSize={['14px', '16px']} fontWeight={300} color={'#ABA8B1'}>UI/UX <br/> Branding</Text>
						</VStack>
						<VStack align={'flex-start'}>
							<Text fontSize={['16px', '18px']} fontWeight={700} color={'#ABA8B1'}>CLIENT</Text>
							<Text fontSize={['14px', '16px']} fontWeight={300} color={'#ABA8B1'}>NOW Inc.</Text>
						</VStack>
						<VStack align={'flex-start'}>
							<Text fontSize={['16px', '18px']} fontWeight={700} color={'#ABA8B1'}>LINK</Text>
							<Text fontSize={['14px', '16px']} fontWeight={300} color={'#ABA8B1'}>Visit website</Text>
						</VStack>
					</Stack>
				</Stack>
			</Box>
			<Box 
				{...(shouldIgnoreParentPadding && { px: '0', })}
			>
				<Image src={CoinmuniteePages} />
			</Box>
		</Box>
	);
};