import React from 'react';
import { Button, 
	Flex, 
	Link,
	useMediaQuery, 
	Image
} from '@chakra-ui/react';
import { HashLink as RLink } from 'react-router-hash-link';
// import { AppRoutes } from '../Routes/AppRoutes';
import PortfolioLogo from '../Assets/svg/PortfolioLogo.svg';

interface INavigationProps{
	display?: 'none'| 'block' | 'flex';
}

export const Navigation = ({display}:INavigationProps) => {
	const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
	return (
		<Flex
			py={6}
			w={'100%'}
			justifyContent={'space-between'}
			display={display}
		>
			<Flex 
				justifyContent={'space-between'} 
				alignItems='center'
				w={'100%'}
				px={[4,'100px']}
				h={'60px'}
				borderRadius={'5px'}
			>
				<Image src={PortfolioLogo} />
				{!isLargerThan900 && <Link as={RLink} 
					_hover={{ 'textDecoration': 'none' }}  
					to={''} 
					onClick={() => window.location.href = 'mailto:sojiadeolu1@gmail.com'}>
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
				{ isLargerThan900 && 
					<Button
						fontSize={'14px'}
						fontWeight={500}
						w={'140px'}
						h={'40px'} bg={'#E54927'}
						color='#ffffff'
						_hover={{ 
							'transform': ' translateY(0.5px)', 
							bgColor: '#fff',
							color: '#E54927'
						}}
					>
						<Link as={RLink} to={''} 
							smooth 
							_hover={{ 'textDecoration': 'none' }} 
							onClick={() => window.location.href = 'mailto:sojiadeolu1@gmail.com'}
						>
								SAY HELLO👋🏾
						</Link>
							
					</Button> 
				
				}

			</Flex>
		</Flex>
	);
};