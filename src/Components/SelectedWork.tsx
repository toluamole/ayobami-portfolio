import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import { Flex, Heading, Box, Image, chakra, Stack, Text, Icon, HStack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { images } from '../Constant/SelectedWorkConstant';
import { ISelectedWork } from '../Types/SelectedWorks';

export const MotionBox = motion(chakra.div);

interface IImagesProps{
	images: ISelectedWork;
}

const Project = ({images}:IImagesProps) => {
	const navigate = useNavigate();
	const targetRef = useRef<HTMLDivElement>(null);
	const { ref, inView } = useInView({
		threshold: 0.8,
	});
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['end end', 'start end'],
	});
	const clipPath = useTransform(
		scrollYProgress, 
		(value) => {
			return value ? 'polygon(45% 20%, 55% 20%, 55% 80%, 45% 80%)' : ' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
		},
	);
	const opacity = useTransform(scrollYProgress, () => {
		return inView ? 1 : 0;
	});

	const navY = useTransform(scrollYProgress,[0.1, 0.7], ['-3%', '3%']);

	
	return (
		<Flex
			direction={'column'} justifyContent={'center'}>
			<Flex 
				w={'auto'}
				direction={['column','column']}
				justifyContent='space-between'
				
			>
				<MotionBox 
					ref={targetRef} 
					style={{clipPath, transition: '0.75s ease'}}
				>
					<Image 
						onClick={()=> navigate(images.path || '')} 
						objectFit={'cover'} 
						w={['430px','100%']} 
						h={['223px','575px']} 
						src={images.src} key={images.src}
					/>
				</MotionBox>
				<MotionBox 
					ref={ref} 
					display={'flex'} 
					flexDirection= {['column','row']}
					style={{ opacity, y: navY, transition: '.3s ease-in' }}
					my={10} 
					justifyContent={'space-between'} 
					alignItems={['start','center']}
				>
					<Stack direction={['row', 'column']} align={['center', 'start']} mb={[4, 0]}>
						<Text textDecoration={['none','underline']} fontWeight={300} fontSize={['24px','14px']} color={'#ABA8B1'}>{images.index}</Text>
						<Text fontSize={['24px','30px']} fontWeight={400} color={'#F8F8F8'}>{images.title}</Text>
					</Stack>
					<Text fontSize={['14px','18px']} fontWeight={300} w={['auto','500px']} color={'#ABA8B1'}>{images.desc}</Text>
					<Icon 
						border={'0.5px solid #E54927'} 
						borderRadius={'50%'} 
						color={'#fff'} 
						as={BsArrowRight} 
						w={'50px'} h={'65px'}
						p={2}
						transform={'skewX(-10deg)'}
						onClick={()=> navigate(images.path || '')}
						display={['none', 'block']}
					/>
					<Flex
						justifyContent={'center'}
						alignItems={'center'}
						display={['flex', 'none']}
						mt={4}
						onClick={()=> navigate(images.path || '')}
					>
						<Text fontSize={'14px'} color={'#E54927'}> View Project</Text>
						<Icon 
							w={'9px'} h={'12px'}
							as={BsArrowRight} 
							color={'#E54927'}
						/>
					</Flex>
				</MotionBox>
			</Flex>
		</Flex>
	);

};

export const SelectedWork = () => {

	return (
		<Box
			id='SelectedWork'
		>
			<HStack py={['20px','50px']} justify={'flex-start'} >
				<Heading  fontSize={['24px','30px']} color={'#F8F8F8'} >SELECTED WORK</Heading>
				<Icon 
					w={['20px','30px']} h={['20px','40px']}
					as={BsArrowDown} 
					color={'#ffffff'}
				/>
			</HStack>
			<Project images={images[0]} />
			<Project images={images[1]} />
			<Project images={images[2]} />
		</Box>
	);
};