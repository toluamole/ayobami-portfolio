import { Box, Heading, Stack, Text, Image } from '@chakra-ui/react';
import React, { useRef} from 'react';
import { TakeAways } from '../../Constant/TakeAways';
import { useInView, useScroll, useTransform } from 'framer-motion';
import { ITakeAway } from '../../Types/TakeAways';
import { MotionBox } from '../../Components/SelectedWork';

interface ITakeAwayProps{
	items: ITakeAway;
	borderColor: string
}


const TakeAway = ({items, borderColor}:ITakeAwayProps) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true});

	return(
		<MotionBox
			ref={ref}
			key={items.id}
			style={{
				transform: isInView ? 'none': 'translateX(200px)',
				opacity: isInView ? 1 : 0,
				transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
			}}
			
		>
			<Stack  p={['20px',5]} border={`1px solid ${borderColor}`} key={items.id}>
				<Text color={'#ABA8B1'} fontSize={['16px','18px']}>{items.text}</Text>
				<Text color={'#ABA8B1'} fontSize={['14px','18px']}  w={['full', '300px', null, '500px']}>{items.subText}</Text>
			</Stack>
		</MotionBox>
	);
};

interface IUserExperienceProps{
	borderColor: string;
	shouldIgnoreParentPadding: boolean;
	userJourneyImage: string;
	appScreens?: string;
	userJourneyMobile?: string;
}

export const UserExperience = ({shouldIgnoreParentPadding, userJourneyImage, userJourneyMobile, appScreens, borderColor}:IUserExperienceProps) => {
	const targetRef = useRef<HTMLDivElement>(null);
	const {scrollYProgress} = useScroll({
		target: targetRef,
		offset: ['start end', 'end end']
	});

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const clipPath = useTransform(scrollYProgress, (value) => {
		return value ? ' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(45% 20%, 55% 20%, 55% 80%, 45% 80%)' ;
		
	});

	
	return(
		<Box>
			<Stack 
				{...(shouldIgnoreParentPadding  && { px:['0', '40px', null, '150px'], py:'80px'})} 
				spacing={['30px','50px']} 
				justifyItems={'center'} 
				align={'center'}
			>
				<Heading 
					alignSelf={'flex-start'} 
					fontSize={['24px','36px']} 
					color={'#ABA8B1'}
					ml={3}
				>
					USER EXPERIENCE
				</Heading>
				<MotionBox  
					ref={ref}
					bgColor={'#202020'} p={[0, 16]}
					style={{
						opacity: isInView ? 1 : 0,
						// transform: isInView ? 'none' : 'translateY(10%)',
						transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
					}}
				>
					<Image display={['none', 'block']}  w={'100%'} src={userJourneyImage}/>
					<Image 
						display={['block', 'none']} 
						src={userJourneyMobile} 
						{...(shouldIgnoreParentPadding  && { px:['3', '40px', null, '150px'], py:['50px','100px'] })} 
					/>
				</MotionBox>
			</Stack>
			<Stack 
				{...(shouldIgnoreParentPadding  && { px:['3', '40px', null, '150px'], py:['50px','100px'] })} 
				direction={['column','row']} 
				spacing={['30px', null, null, '72']} 
				align={'flex-start'} 
				justifyContent={'space-between'}
			>
				<Heading color={'#ABA8B1'} fontSize={['24px','36px']}>KEY TAKEAWAYS</Heading>
				<Stack spacing={['20px',10]}  >
					<TakeAway borderColor={borderColor} items={TakeAways[0]} />
					<TakeAway borderColor={borderColor}  items={TakeAways[1]} />
					<TakeAway borderColor={borderColor}  items={TakeAways[2]} />
				</Stack>
			</Stack>
			<MotionBox 
				ref={targetRef}
				style={{clipPath, transition: '0.5s ease'}}
				{...(shouldIgnoreParentPadding && { px: '0', pt:['0','0'] })}
			>
				<Image  w={'full'} src={appScreens}/>
			</MotionBox>
		</Box>
	);
};