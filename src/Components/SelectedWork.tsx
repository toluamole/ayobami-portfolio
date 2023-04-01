import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import { Flex, Heading, Box, Image, chakra, Stack, Text, Icon, HStack, keyframes } from '@chakra-ui/react';
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
	
	const animationKeyframes = keyframes`
		0% { opacity: 0; transform: scale(5); }
		50% {opacity: 0.7; transform: scale3d(1.5,1.5,1);}
		100% {transform:  opacity: 1, transform: scale(2)};
	`;

	const animation = `${animationKeyframes} .2s ease`;

	
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
					style={{clipPath, transition: '0.5s ease'}}
					position={'relative'}
					onClick={()=> navigate(images.path || '')} 
					_before={{
						content:'" "',
						position:'absolute',
						width:{base:'100%', lg: '100%'},
						height:'100%',
						top:0, 
						left:0,
						background:'rgba(0,0,0,0.5)',
						opacity:0,
						transition: 'all 0.5s',
						// borderRadius: {base:'4px',lg:'10px'}
					}}
					_after={{
						content: '"open"',
						// maxWidth: 'auto',
						width:'100px',
						height: '100px',
						color:'#fff',
						ZIndex:'1',
						bottom:'38%',
						left: '43%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						bg:'#CA4F29',
						borderRadius: '50%',
						position:'absolute',
						opacity:0,
						transition: 'all 0.2s cubic-bezier(.17,.67,.83,.67)'
					}}
					_hover={{
						_after: {
							opacity: {base: 0, lg:1},
							animation: {base: 'none', lg:animation}
						},
						_before: {
							opacity: {base: 0, lg:1},
						}
					}}
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