import { VStack, Image, Heading, Grid, GridItem, Divider } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { images } from '../Constant/Gallery';
import {  useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from './SelectedWork';

const lightboxImages = images.map((image)=>{
	return image.src;
});

export const Gallery = () => {
	// const [imgIndex, setImgIndex] = useState(0);
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		source: ''
	});
	const targetRef = useRef<HTMLDivElement>(null);
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: false
	});
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end end'],
	});
	const opacity = useTransform(scrollYProgress, () => {
		return inView ? 1 : 0;
	});

	// const navY = useTransform(scrollYProgress,[0.1, 0.7], ['-3%', '3%'] );
	
	const _handleClick = (src:string) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			source: src
		});
	};

	return (
		<MotionBox 
			ref={ref} 
			id='Gallery'  
			// style={{ opacity,  transition: '.2s ease'}} 
		>
			<Divider mb={'80px'} />
			<VStack>
				<MotionBox  
					id='Gallery'  
					// style={{ opacity,  transition: '.2s ease'}} 
					display={'flex'}
					alignSelf={'flex-start'}
				>
					<Heading mb={'80px'} fontSize={['36px','56px']} color={'#F8F8F8'} >GALLERY...</Heading>
				</MotionBox>
				<Grid  templateRows='repeat(2, 1fr)' templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)']} gap={6}>
					{images.map((image) => (
						<GridItem w='100%' key={image.id}   >
							<Image 
								src={image.src} 
								w={'450px'} h={'250px'} 
								bg={'#D9D9D9'}
								objectFit={'cover'}
								onClick={() => _handleClick(image.src)}
								_hover={{ 
									'transform': 'translateY(-3px)'
								}}
								transition={' all ease-in .2s'}
								cursor={'pointer'}
								key={image.id}
							/>
						</GridItem>
					))}
				</Grid>
			</VStack>
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={lightboxImages}
				source={lightboxController.source}
			/>
		</MotionBox>
	);
};