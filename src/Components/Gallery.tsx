import { VStack, Image, Heading, Grid, GridItem, Divider } from '@chakra-ui/react';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { images } from '../Constant/Gallery';
import { MotionBox } from './SelectedWork';
import 'react-image-lightbox/style.css';

export const Gallery = () => {
	const [imgIndex, setImgIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const _handleClick = (id:number) => {
		setIsOpen(true);
		setImgIndex(id);
	};
	

	return (
		<MotionBox 
			id='Gallery'  
		>
			<Divider mb={'80px'} />
			<VStack>
				<MotionBox  
					id='Gallery'  
					display={'flex'}
					alignSelf={'flex-start'}
				>
					<Heading mb={'80px'} fontSize={['36px','56px']} color={'#F8F8F8'} >GALLERY...</Heading>
				</MotionBox>
				<Grid  templateRows='repeat(2, 1fr)' templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)']} gap={6}>
					{images.map((image) => (
						<GridItem  key={image.id}   >
							<Image 
								src={image.src} 
								w={'450px'} h={'250px'} 
								bg={'#D9D9D9'}
								objectFit={'cover'}
								onClick={() => _handleClick(image.id)}
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
			{isOpen && <Lightbox 
				mainSrc={images[imgIndex].src}
				nextSrc={images[imgIndex] === images[images.length -1 ] ? undefined : images[(imgIndex + 1) % images.length].src}
				prevSrc={images[imgIndex] === images[0] ? undefined : images[(imgIndex + 1) %  images.length].src }
				onCloseRequest={() => setIsOpen(false)}
				onMovePrevRequest={() =>setImgIndex((imgIndex + images.length - 1) % images.length)}
				onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
				enableZoom={false}
				animationDisabled
			/>}
		</MotionBox>
	);
};