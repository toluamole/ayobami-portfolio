import React from 'react';
import { Button, 
	Flex, 
	HStack, 
	// Text,
	Box, 
	Link,
	useMediaQuery, 
	Image
} from '@chakra-ui/react';
import { HashLink as RLink } from 'react-router-hash-link';
import { AppRoutes } from '../Routes/AppRoutes';
import PortfolioLogo from '../Assets/svg/PortfolioLogo.svg';

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
				<Image src={PortfolioLogo} />
				{!isLargerThan900 && <Link as={RLink} _hover={{ 'textDecoration': 'none' }}  to={'#Contact'}>
					<Button
						fontSize={'12px'}
						fontWeight={500}
						w={'100px'}
						h={'40px'} bg={'#E54927'}
						color='#ffffff'
						_hover={{ 'transform': ' translateY(0.5px)' }}
					>
					SAY HELLO👋🏾
					</Button>
				</Link>}
				{ isLargerThan900 && <><HStack spacing={10}>
					<Link 
						as={RLink} 
						to={AppRoutes.home} 
						fontSize={'14px'} 
						fontWeight={500}
						_hover={{textDecoration: 'none'}}
					>
						HOME
					</Link>
					<Link 
						as={RLink} 
						to='#SelectedWork' 
						smooth  
						fontSize={'14px'} 
						fontWeight={500}
						_hover={{textDecoration: 'none'}}
					>
						WORK
					</Link>
					<Link 
						as={RLink} 
						to={'#Gallery'}  
						smooth  
						fontSize={'14px'} 
						fontWeight={500}
						_hover={{textDecoration: 'none'}}
					>
						GALLERY
					</Link>
					<Link as={RLink} to={'#Contact'} smooth  fontSize={'14px'} fontWeight={500} _hover={{textDecoration: 'none'}}>CONTACT</Link>
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
							SAY HELLO👋🏾
					</Link>
						
				</Button> 
				</>
				}
			</Flex>
		</Box>
	);
};