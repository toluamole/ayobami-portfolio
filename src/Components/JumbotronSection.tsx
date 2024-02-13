import { Flex, Image, VStack, Text, Button, Stack, Link, Heading } from '@chakra-ui/react';
import React from 'react';
import profile from '../Assets/image/profile.png';
import Resume from '../Assets/Ayobami_Adeolu_Resume.pdf';
import { MotionBox } from './SelectedWork';
import { AnimatePresence } from 'framer-motion';

export const JumbotronSection = () => {
	const firstText= 'Digital ';
	const secondText = 'Product Designer.';
	const thirdText = 'Creative.';
	const splitfirstText = Array.from(firstText);
	const splitSecondText = Array.from(secondText);
	const splitThirdText = Array.from(thirdText);
	

	const containerVariants = {
		hidden: {opacity: 0},
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: 0.06,
				delayChildren: 5.5 * i
			}
		})
	};

	const childVariants = {
		visible: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100
			}
		},
		hidden: {
			opacity: 0,
			y: 5,
			x: 10,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100
			}
		}
		
	};


	return (
		<AnimatePresence exitBeforeEnter>
			<Flex direction={'column'} justifyContent={'center'} alignItems={['start','center']}>
				<VStack justify={'center'} align={'end'} my={['50px','80px']}>
					<MotionBox
						variants={containerVariants}
						initial ={'hidden'}
						animate={'visible'}
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'center'}
						alignItems={['baseline','end']}
						w={['100%']} px={['9px', 0]}
					>
						<Flex direction={['column', 'row']}>
							<Flex  >
								{
									splitfirstText.map((word, index) => {
										return(
											<MotionBox
												key={index}
												variants={childVariants}
											>
												<Heading 
													key={index} 
													fontSize={['30px','70px']} 
													fontWeight={500} 
													color={'white'} 
												>
													{word === ' ' ? '\u00A0' : word}
												</Heading>
											</MotionBox>
										);
									})
								}
							</Flex>

							<Flex >
								{
									splitSecondText.map((word, index) => {
										return(
											<MotionBox
												key={index}
												variants={childVariants}
											>
												<Heading 
													key={index} 
													fontSize={['30px','70px']} 
													fontWeight={500} 
													color={'white'} 
												>
													{word === ' ' ? '\u00A0' : word}
												</Heading>
											</MotionBox>
										);
									})
								}
							</Flex>
						</Flex>

						<Flex>
							{
								splitThirdText.map((word, index) => {
									return(
										<MotionBox
											variants={childVariants}
											key={index}
										>
											<Heading 
												key={index} 
												// alignSelf={'flex-end'} 
												fontSize={['30px','70px']} 
												fontWeight={500} 
												color={'white'}
											> 
												{word}
											</Heading>
										</MotionBox>
									);
								})
							}
						</Flex>
					</MotionBox>
					
					
				</VStack>
				<Stack direction={['column', null, null, 'row']} spacing={[10,20]} px={[3, 4]} pb={'150px'}>
					<Image 
						cursor={'pointer'} 
						boxSize={'100%'} 
						objectFit="cover"
						w={['370px','550px']} h={['290px','523px']} 
						src={profile} 
					/>
					<VStack spacing={6} pt={[0,6]}>
						<Text w={['auto', '468px']} color={'#ABA8B1'} fontSize={['14px','18px']}> Hi, I am Ayobami Adeolu a digital product designer and a creative with over 4 years of experience. 
						I have been designing digital products for the banking, hospitality, fashion, healthcare, pharmaceutical, automotive, and software industries.
						</Text>
						<Text w={['auto', '468px']}  color={'#ABA8B1'} fontSize={['14px','18px']}>
						I am based in Calgary AB and I have been privileged to have worked with various brands and startups worldwide as a contractor, part-time, freelancer, and full-time employee. 
						Throughout my career, I have done the entire project lifecycle, from user research and user testing to creating user flows, wireframes, high fidelity designs, and prototypes.
						</Text>
						<Link alignSelf={'flex-start'} href={Resume} _hover={{textDecoration: 'none'}}><Button 
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