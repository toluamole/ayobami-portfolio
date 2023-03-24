import { Stack, Heading,  Text, Image, HStack } from '@chakra-ui/react';
import { useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import LoopPages from '../../Assets/image/Loop-pages.png';
import { IColors } from '../../Types/Colors';
import { container, item } from './animation';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '../../Components/SelectedWork';

interface IVisualExperiencProps{
	shouldIgnoreParentPadding: boolean;
	colors:IColors[];
	display?: 'none' | 'block' | 'flex'
}

export const VisualExperience = ({shouldIgnoreParentPadding, colors, display}:IVisualExperiencProps) => {
	const targetRef = useRef<HTMLDivElement>(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end end']
	});

	const {ref, inView} = useInView({
		threshold: 0.5,
		triggerOnce: true
	}); 

	const clipPath = useTransform(scrollYProgress, (value) => {
		return value ? ' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(45% 20%, 55% 20%, 55% 80%, 45% 80%)' ;
		
	});

	return (
		<Stack spacing={[14,16]}>
			<Stack {...(shouldIgnoreParentPadding  && { px:['3', '40px', null, '150px']})} spacing={[6,10]} >
				<Stack direction={['column', 'row']} justifyContent={'space-between'} mb={[6,10]}>
					<Heading fontSize={['24px','28px']} color={'#ABA8B1'}>Visual experience</Heading>
					<Stack>
						<Text fontSize={['16px','18px']} color={'#ABA8B1'}>Typography</Text>
						<Text fontSize={['24px','28px']} color={'#ABA8B1'}>Montserrat Family</Text>
					</Stack>
				</Stack>
				
				<MotionBox
					variants={container }
					initial='hidden'
					animate={inView ?'show' : ''}
					ref={ref}
				>
					<HStack 
						spacing={'4'} 
						// flexWrap={'wrap'}
						flexFlow='wrap' 
						alignItems={'flex-start'} 
						justifyContent={'space-between'} 
					>
						
						<MotionBox
							variants={item}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							mb={6} ml={['5px', 0]}
						>
							<Image 
								w={['80px','100px']} 
								h={['80px','100px']} 
								src={colors[0].src} 
								mb={4}
							/>
							<Text fontWeight={'14px'} color={'#ABA8B1'}>{colors[0].hex}</Text>
						</MotionBox>
					
					
						<MotionBox
							variants={item}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							mb={6}
						>
							<Image 
								w={['80px','100px']} 
								h={['80px','100px']} 
								src={colors[1].src} 
								mb={4}	
							/>
							<Text fontWeight={'14px'} color={'#ABA8B1'}>{colors[1].hex}</Text>
						</MotionBox>
					
					
						<MotionBox
							variants={item}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							mb={6}
						>
							<Image 
								w={['80px','100px']} 
								h={['80px','100px']} 
								src={colors[2].src} 
								mb={4}
							/>
							<Text fontWeight={'14px'} color={'#ABA8B1'}>{colors[2].hex}</Text>
						</MotionBox>
					
						<MotionBox
							variants={item}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							mb={6}
						>
							<Image 
								w={['80px','100px']} 
								h={['80px','100px']} 
								src={colors[3].src} 
								mb={4}
							/>
							<Text fontWeight={'14px'} color={'#ABA8B1'}>{colors[3].hex}</Text>
						</MotionBox>
					
					
						<MotionBox
							variants={item}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							mb={6}
						>
							<Image 
								w={['80px','100px']} 
								h={['80px','100px']} 
								src={colors[4].src} 
								mb={4}
							/>
							<Text fontWeight={'14px'} color={'#ABA8B1'}>{colors[4].hex}</Text>
						</MotionBox>
					
						
						<MotionBox
							variants={item}
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							mb={6}
						>
							<Image 
								w={['80px','100px']} 
								h={['80px','100px']} 
								src={colors[5].src} 
								mb={4}
							/>
							<Text fontWeight={'14px'} color={'#ABA8B1'}>{colors[5].hex}</Text>
						</MotionBox>
						
					</HStack>
				</MotionBox>
				
			</Stack>
			<MotionBox 
				ref={targetRef}
				style={{clipPath, transition: '0.75s ease'}}
				{...(shouldIgnoreParentPadding && { px: '0', })}
				display={display}
			>
				<Image  src={LoopPages}/>
			</MotionBox>
		</Stack>
	);
};