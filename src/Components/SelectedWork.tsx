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
	content: string;
}

const Project = ({images,content}:IImagesProps) => {
	const navigate = useNavigate();
	const targetRef = useRef<HTMLDivElement>(null);
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end end'],
	});
	const clipPath = useTransform(
		scrollYProgress, 
		(value) => {
			return value ?  ' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(45% 20%, 55% 20%, 55% 80%, 45% 80%)';
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

	const handleClick = () => {
		if (images.path) {
			navigate(images.path);
		} else if (images.title === 'Archibald') {
			window.open('https://www.archibaldlondon.com/', '_blank');
		} else {
			console.log('No path or external link defined for this image.');
		}
	};
	
	return (
		<Flex
			direction={'column'} 
			justifyContent={'center'}
			id={'SelectedWork'}
		>
			<Flex 
				w={'auto'} h={'auto'}
				direction={['column','column']}
				justifyContent='space-between'
				
			>
				<MotionBox 
					ref={targetRef} 
					style={{clipPath, transition: '0.5s ease'}}
					position={'relative'}
					onClick={handleClick} 
					cursor={'pointer'}
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
						content: `'${content}'`,
						// maxWidth: 'auto',
						width:'150px',
						height: '150px',
						color:'#fff',
						ZIndex:'1',
						bottom:'38%',
						left: '43%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
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
						onClick={handleClick} 
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
					mb={20} mt={5}
					justifyContent={'space-between'} 
					alignItems={['start','center']}
				>
					<Stack direction={['row', 'column']} align={['center', 'start']}  mb={[4, 0]}>
						<Text textDecoration={['none','underline']} fontWeight={300} fontSize={['24px','14px']} color={'#ABA8B1'}>{images.index}</Text>
						<Heading fontSize={['24px', null, null, '30px']} fontWeight={400} color={'#F8F8F8'}>{images.title}</Heading>
					</Stack>
					<Text fontSize={['14px', null, null, '18px']} fontWeight={300} w={['auto', '420px', null,'520px']} color={'#ABA8B1'}>{images.desc}</Text>
					<Icon 
						border={'0.5px solid #E54927'} 
						borderRadius={'50%'} 
						color={'#fff'} 
						as={BsArrowRight} 
						w={'50px'} h={'65px'}
						p={2}
						transform={'skewX(-10deg)'}
						onClick={handleClick}
						display={['none', 'block']}
						cursor={'pointer'}
						transition={'all ease .3s'}
						_hover={{
							transform: 'translateY(-0.5px)'
						}}
					/>
					<Flex
						justifyContent={'center'}
						alignItems={'center'}
						display={['flex', 'none']}
						mt={4}
						onClick={handleClick}
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
			<Project content='Coming Soon' images={images[0]} />
			<Project content='Open' images={images[1]} />
			<Project content='Open' images={images[2]} />
			<Project content='Open' images={images[3]} />
		</Box>
	);
};