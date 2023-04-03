import React from 'react';
import { Button, 
	Flex, 
	HStack, 
	Text,
	Box, 
	Link,
	useMediaQuery, 
} from '@chakra-ui/react';
import { HashLink as RLink } from 'react-router-hash-link';
import { AppRoutes } from '../Routes/AppRoutes';

interface INavigationProps{
	display?: 'none'| 'block' | 'flex';
}

export const Navigation = ({display}:INavigationProps) => {
	const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
	return (
		<Box
			py={6}
			display={display}
		>
			<Flex 
				justifyContent={'space-between'} 
				alignItems='center'
				bg={'#ffffff'}
				px={[4,8]}
				h={'60px'}
				borderRadius={'5px'}
			>
				<HStack justifyContent={'center'} alignItems={'center'}>
					<Text  fontSize={['16px','18px']} fontWeight={500}>AYOADEOLU</Text>
					<Box
						h={'8px'}
						w={'8px'}
						bgColor={'#EFC600'}
					/>
				</HStack>
				{!isLargerThan900 && <Link as={RLink} _hover={{ 'textDecoration': 'none' }} to=''>
					<Button
						fontSize={'12px'}
						fontWeight={500}
						w={'100px'}
						h={'40px'} bg={'#E54927'}
						color='#ffffff'
						_hover={{ 'transform': ' translateY(0.5px)' }}
					>
					SAY HELLO
					</Button>
				</Link>}
				{ isLargerThan900 && <><HStack spacing={10}>
					<Link as={RLink} to={AppRoutes.home} fontSize={'14px'} fontWeight={500}>HOME</Link>
					<Link as={RLink} to='#SelectedWork' smooth  fontSize={'14px'} fontWeight={500}>WORK</Link>
					<Link as={RLink} to={'#Gallery'}  smooth  fontSize={'14px'} fontWeight={500}>GALLERY</Link>
					<Link as={RLink} to={'#Contact'} smooth  fontSize={'14px'} fontWeight={500}>CONTACT</Link>
				</HStack>
				
				<Button
					fontSize={'14px'}
					fontWeight={500}
					w={'140px'}
					h={'40px'} bg={'#E54927'}
					color='#ffffff'
					_hover={{ 'transform': ' translateY(0.5px)' }}
				>
					<Link as={RLink} to={'#Contact'} smooth _hover={{ 'textDecoration': 'none' }} >
							SAY HELLO
					</Link>
						
				</Button> 
				</>
				}
			</Flex>
		</Box>
	);
};