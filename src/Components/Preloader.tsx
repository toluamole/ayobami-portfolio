import { Text } from '@chakra-ui/react';
import { AnimatePresence, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { MotionBox } from './SelectedWork';

interface IPreloaderProp{
	onComplete : () => void
}

export const Preloader = ({onComplete}:IPreloaderProp) => {

	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			y: '-100%',
			transition: {
				duration: 1,
				delay: 5
			}
		}).then(() => {
			onComplete();
		});
	}, [controls, onComplete]);

	// const containerVariants = {
	// 	hidden: {
	// 		opacity: 0,
	// 	},
	// 	visible: {
	// 		opacity: 1,
	// 		transition: {
	// 			duration: 1
	// 		}
	// 	}
	// };
	const BoxVariant = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0.5
			}
		}
	};

	
	const textVariants = {
		hidden: {
			opacity: 0,
			marginLeft: '-150px'
		},
		visible: {
			opacity: 1,
			marginLeft: '0px',
			transition: {
				duration: 1,
				delay: 2
			}
		}
	};

	

	return(
		<AnimatePresence exitBeforeEnter>
			<MotionBox
				w={'100vw'}
				h={'100vh'}
				bgColor={'#000'}
				position={'fixed'}
				left={'0'}
				bottom={'0'}
				right={'0'}
				zIndex={'999'}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				overflow={'hidden'}
				initial={{ y: 0 }}
				animate={controls}
			>
				<MotionBox
					// variants={containerVariants}
					initial="hidden"
					animate="visible"
					display={'flex'}
					justifyContent={'center'}
					alignItems={'baseline'}
					overflow={'hidden'}
				>
					<MotionBox
						variants={textVariants}
					>
						<Text fontSize={'24px'} color={'#fff'}>Ayobami Adeolu</Text>
					</MotionBox>
					<MotionBox 
						variants={BoxVariant}
						ml={1}
						w={'8px'}
						h={'8px'}
						bgColor={'#EFC600'}
					/>
					
				</MotionBox>
				
			</MotionBox>
		</AnimatePresence>
	);
};