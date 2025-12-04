import { Flex, Image, VStack, Text, Button, Stack, Link, Heading } from '@chakra-ui/react';
import React from 'react';
import profile from '../Assets/image/profile.png';
import Resume from '../Assets/Ayobami_Adeolu_Resume.pdf';
import { AnimatePresence } from 'framer-motion';

export const JumbotronSection = () => {
	// const firstText= 'Digital ';
	// const secondText = 'Product Designer.';
	// const thirdText = 'Creative.';
	// const splitfirstText = Array.from(firstText);
	// const splitSecondText = Array.from(secondText);
	// const splitThirdText = Array.from(thirdText);


	

	// const containerVariants = {
	// 	hidden: {opacity: 0},
	// 	visible: (i = 1) => ({
	// 		opacity: 1,
	// 		transition: {
	// 			staggerChildren: 0.06,
	// 			delayChildren: 5.5 * i
	// 		}
	// 	})
	// };

	// const childVariants = {
	// 	visible: {
	// 		opacity: 1,
	// 		y: 0,
	// 		x: 0,
	// 		transition: {
	// 			type: 'spring',
	// 			damping: 12,
	// 			stiffness: 100
	// 		}
	// 	},
	// 	hidden: {
	// 		opacity: 0,
	// 		y: 5,
	// 		x: 10,
	// 		transition: {
	// 			type: 'spring',
	// 			damping: 12,
	// 			stiffness: 100
	// 		}
	// 	}
		
	// };


	return (
		<AnimatePresence exitBeforeEnter>
			<Flex direction={'column'} justifyContent={'center'} alignItems={'start'}>
				<VStack justify={'center'} align={'end'} my={['50px','80px']} pl={[3, 0]}>
					<Heading 
						// key={index} 
						fontSize={['30px','70px']} 
						fontWeight={500} 
						color={'white'} 
					>
						
						Product designer transforming complex ideas into clear, engaging experiences
					</Heading>
					
				</VStack>
				<Stack direction={['column', null, null, 'row']} spacing={[10,20]} px={[3, 0]} pb={'150px'}>
					<Image 
						cursor={'pointer'} 
						boxSize={'100%'} 
						objectFit="cover"
						w={['370px','500px']} h={['290px','500px']} 
						src={profile} 
					/>
					<VStack spacing={6} pt={0}>
						<Text w={['auto', 'auto']} color={'#ABA8B1'} fontSize={['14px','18px']}> 
							I am a Product & UX Designer focused on building high-impact digital products that improve user experience and drive measurable business results.
							With over 6 years of designing across banking, hospitality, fintech, fashion, healthcare, and SaaS, 
							I’ve helped teams launch features and products that improved user engagement, reduced friction, and strengthened conversion across multiple touchpoints.
						</Text>
						
						<Text w={['auto', 'auto']}  color={'#ABA8B1'} fontSize={['14px','18px']}>
							Throughout my career, I’ve worked with global brands and startups—leading or contributing to end-to-end design workflows that include research, usability testing, UX strategy, interaction design, and high-fidelity product execution. 
							This work has improved task completion rates through clearer user flows, reduced onboarding time by redesigning key product experiences, increased engagement with more intuitive interaction patterns and design systems, and accelerated development cycles through componentized, dev-ready design documentation.
						</Text>
						<Text w={['auto', 'auto']}  color={'#ABA8B1'} fontSize={['14px','18px']}>
							I’m based in Canada and my portfolio reflects a mix of product redesigns, 0→1 experiences, Design systems, system improvements, and strategic UX contributions that have helped teams ship more confidently.
						</Text>
						<Text w={['auto', 'auto']}  color={'#ABA8B1'} fontSize={['14px','18px']}>
							My approach is simple: understand the problem, design with intention, validate with users, and deliver work that creates measurable value for both the business and the people using the product.
						</Text>
						
						<Link alignSelf={'flex-start'} href={Resume} pt={7} _hover={{textDecoration: 'none'}}><Button 
							bg={'transparent'}
							border={'0.5px solid #D9D9D9 '} 
							color={'#C4C4C4'}  w={['200px','250px']} h={['40px','50px']} 
							alignSelf={'flex-start'}
							fontSize={['12px','16px']}
							fontWeight={500}
							_hover={{
								color: 'black',
								bg: 'white'
							}}
						>
							DOWNLOAD MY RESUME
						</Button></Link>
					</VStack>
				</Stack>
			</Flex>
		</AnimatePresence>
	);
};