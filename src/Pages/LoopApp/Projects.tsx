import { Divider, Grid, GridItem, Heading, Image,  Stack, Text } from '@chakra-ui/react';
import Star from '../../Assets/svg/Star.svg';
import React from 'react';


export const Projects = () => {
	return(
		<Stack 
			spacing={10} 
			pb={'80px'} 
			position={'relative'}
		>
			<Grid  
				templateColumns={['repeat(1, 1fr)','repeat(5, 1fr)']} 
				gap={4}	
			>
				<GridItem colSpan={2} >
					<Heading
						fontSize={['14px','30px']} 
						color={'#FFFFFF'}
						_after={{
							content: '" "',
							position: 'absolute',
							bottom: '60%',
							left: '-200px',
							display: 'block',
							width: '355px',
							height: '355px',
							bgGradient: 'radial-gradient(50% 50% at 50% 50%, rgba(229, 73, 39, 0.2) 0%, rgba(229, 73, 39, 0) 100%)',
							// zIndex: '-1'
						}}
					>
						OTHER PROJECTS
					</Heading>
				</GridItem>
				<GridItem  colEnd={10} >
					<Image w={['30px','60px']} h={['30px','60px']} src={Star} />
				</GridItem>
			</Grid>
			<Divider />
			<Grid templateColumns={['repeat(1, 1fr)','repeat(5, 1fr)']} gap={4}>
				<GridItem colSpan={2} >
					<Text fontWeight={500} fontSize={['14px','30px']}  color={'#FFFFFF'}>COINMUNITEE</Text>
				</GridItem>
				<GridItem colSpan={2}  colEnd={10} >
					<Text fontSize={['12px','18px']} color={'#ABA8B1'}> PRODUCT DESIGN</Text>
				</GridItem>
			</Grid>
			<Divider />
			<Grid templateColumns={['repeat(1, 1fr)','repeat(5, 1fr)']} gap={4}>
				<GridItem colSpan={2} >
					<Text fontSize={['14px','30px']} fontWeight={500}  color={'#FFFFFF'}>AKUKO APP</Text>
				</GridItem>
				<GridItem colSpan={2}  colEnd={10} >
					<Text fontSize={['12px','18px']} color={'#ABA8B1'}>PRODUCT DESIGN</Text>
				</GridItem>
			</Grid>
			<Divider />
			<Grid templateColumns={['repeat(1, 1fr)','repeat(5, 1fr)']} gap={4}>
				<GridItem colSpan={2} >
					<Text fontSize={['14px','30px']} fontWeight={500}  color={'#FFFFFF'}>VORTEX247</Text>
				</GridItem>
				<GridItem colSpan={2}  colEnd={10} >
					<Text fontSize={['12px','18px']} color={'#ABA8B1'}>WEB DESIGN</Text>
				</GridItem>
			</Grid>
		</Stack>
	);
};