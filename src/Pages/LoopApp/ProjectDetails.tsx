import { Box, Heading, Stack, VStack, Text,Image } from '@chakra-ui/react';
import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import GirlWithPhone from '../../Assets/image/GirlWithPhone.png';
import { MotionBox } from '../../Components/SelectedWork';
import { useInView } from 'react-intersection-observer';

export const ProjectDetails = () => {
	const targetRef = useRef<HTMLDivElement>(null);
	const {ref, inView} = useInView({
		threshold: 0.3,
		triggerOnce: true
	});
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end end']
	});

	
	const clipPath = useTransform(scrollYProgress, (value) => {
		return value ? ' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(45% 20%, 55% 20%, 55% 80%, 45% 80%)'  ;
		
	});

	const opacity = useTransform(scrollYProgress, () => {
		return inView ? 1 : 0;
	});

	const transform = useTransform(scrollYProgress, () => {
		return inView ? 'translateX(0)' : 'translateX(100%)' ;
	});
	
	return(
		<Box >
			<MotionBox
				style={{
					opacity,
					transition: 'all 0.2s easeIn'
				}}
			>
				<Stack spacing={8} mb={'50px'} >
					<Heading fontSize={['24px','36px']} color={'#ABA8B1'}>PROBLEM STATEMENT</Heading>
					<Text fontWeight={400} fontSize={['14px','18px']} color={'#ABA8B1'}>
						Consumer insights are cited as the number one spending priority by senior executives within product based industries. 
						They are severely underutilized and systems are often poorly developed with less than a fifth of brands taking advantage of said insights*.
					</Text>
					<Text fontSize={['14px','20px']} fontWeight={700} color={'#ABA8B1'}>
						This data is becoming more crucial than ever.
					</Text>
					<Text fontWeight={400} fontSize={['14px','18px']} color={'#ABA8B1'}>
						With the rise of e-commerce as a more direct sales channel enabling brands to bypass retailers - 
						transactions taking place through retailers or offline have a distinct disadvantage of not forming a connection pathway between brand and customer.
					</Text>
					<Text fontSize={['14px','20px']} fontWeight={700} color={'#ABA8B1'}>
						Brands can no longer afford to neglect their customers.
					</Text>
					<Text fontWeight={400} fontSize={['14px','18px']} color={'#ABA8B1'}>
						A consumer centric approach is vital should companies hope to efficiently accelerate their growth trajectories and maintain loyalty.
					</Text>
				</Stack>
			</MotionBox>
			
			<Stack ref={ref} direction={['column', 'row']} spacing={[16,36]} mb={'50px'} justify={'space-between'} align={'center'}>
				<MotionBox 
					ref={targetRef}
					style={{clipPath, transition: '0.5s ease'}}
				// {...(shouldIgnoreParentPadding && { px: '0', })}
				>
					<Image  w={['100%', 'auto']} h={['auto', null, null,'500px']} src={GirlWithPhone} />
				</MotionBox>
				<MotionBox
					style={{
						transform: transform,
						opacity,
						transition: 'all 0.5s ease-in'
					}}
				>
					<VStack justify={'flex-start'} align={'flex-start'}>
						<Text fontSize={'16px'} color={'#ABA8B1'} textDecor={'underline'}>Market Size</Text>
						<Text fontWeight={400} fontSize={['14px','18px']} w={['100%','274px']} color={'#ABA8B1'}>
							Loop offers a solution with a focus on Customer RETENTION instead of Customer ACQUISITION and therefore has a stake in every related industry.
						</Text>
					</VStack>
				</MotionBox>
			</Stack>
			<MotionBox
				display={'flex'}
				flexDirection={['column', 'row']} 
				justifyContent={'space-between'} 
				alignItems={'flex-start'}
				flexWrap={'wrap'}
				style={{
					opacity,
					transition: 'all 0.5s easeIn'
				}}
			>
				<VStack align={'flex-start'} spacing={['4', '']} mb={['30px', '']}>
					<Text fontSize={['24px','28px']} color={'#E54927'}>20.82 billion</Text>
					<Text fontSize={'14px'} color={'#ABA8B1'}>Insight as a service</Text>
					<Text fontSize={'14px'}  w={['auto','220px']}  color={'#ABA8B1'}>
						Growing need for customer analytics in enhancing customer experience and loyalty, 
						through predictive analysis as well as personalizing marketing on the past 
						data of the potential customers is driving the market growth.
					</Text>
				</VStack>
				<VStack align={'flex-start'} spacing={['4', '']}  mb={['30px', '']}>
					<Text fontSize={['24px','28px']} color={'#E54927'}>2.2 billion</Text>
					<Text fontSize={'14px'}  color={'#ABA8B1'}>Focus groups</Text>
					<Text fontSize={'14px'}  w={['auto','220px']}   color={'#ABA8B1'}>
						In 2017, $2.2 billion worldwide was spent on conducting focus groups. 
					</Text>
				</VStack>
				<VStack align={'flex-start'} spacing={['4', '']}  mb={['30px', '']}>
					<Text fontSize={['24px','28px']} color={'#E54927'}>76 billion</Text>
					<Text fontSize={'14px'}  color={'#ABA8B1'}>Global Market Research</Text>
				</VStack>
				<VStack align={'flex-start'} spacing={['4', '']} >
					<Text fontSize={['24px','28px']} color={'#E54927'}>39 billion</Text>
					<Text fontSize={'14px'}  color={'#ABA8B1'}>Surveys</Text>
					<Text fontSize={'14px'}  color={'#ABA8B1'} w={['auto','220px']} >
						The global survey market was in 2019 valued to $39 billion. 
						(1) This market estimation includes all types of market research, such as telephone polls, online surveys, and questionnaires. 
						The online based survey market alone, amounted to less than 30% - $11.7 billion of the value. 
					</Text>
				</VStack>
			</MotionBox>
		</Box>
	);
};