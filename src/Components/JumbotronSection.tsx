import { Flex, Image, VStack, Text, Button, Stack, Link } from '@chakra-ui/react';
import React from 'react';
import profile from '../Assets/image/profile.png';
import Resume from '../Assets/Ayobami-Adeolu-Resume.pdf';

export const JumbotronSection = () => {
	return (
		<Flex direction={'column'} justifyContent={'center'} alignItems={'center'}>
			<VStack justify={'center'} align={'center'} my={['50px','80px']}>
				<Text fontSize={['34px','56px']} fontWeight={500} color={'white'} >A COLLECTION OF DESIGN ARTIFACTS</Text>
				<Text fontSize={['34px','56px']} fontWeight={500} color={'white'}> MADE WITH LOVE AND PURPOSE</Text>
			</VStack>
			<Stack direction={['column', null, null, 'row']} spacing={[10,20]} px={[3, 4]} pb={'90px'}>
				<Image 
					cursor={'pointer'} 
					boxSize={'100%'} 
					objectFit="cover"
					w={['370px','500px']} h={['290px','450px']} 
					src={profile} 
					filter='grayscale(100%)'
					_hover={{ 
						'filter' : 'grayscale(0%)',
						'transform': 'translateY(-3px)'
					}}
					transition={' all ease-in .2s'}
				/>
				<VStack spacing={6} pt={[0,6]}>
					<Text color={'#ABA8B1'} fontSize={['14px','18px']}> Hi, I am Ayobami Adeolu a designer with over 3 years of experience, 
                        I have been designing digital products for the banking, hospitality, fashion, healthcare, pharmaceutical, automotive, 
                        and software industries. 
					</Text>
					<Text color={'#ABA8B1'} fontSize={['14px','18px']}>
                        I have worked with various startups in the US, UK, and internationally at large as a contractor, part time, freelancer, and full time employee. Throughout my career, 
                        I have done the entire project lifecycle, from user research and user testing to creating user flows, wireframes, high-fidelity designs, and prototypes.
					</Text>
					<Link alignSelf={'flex-start'} href={Resume} _hover={{textDecoration: 'none'}}><Button 
						bg={'transparent'}
						border={'0.5px solid #D9D9D9 '} 
						color={'#C4C4C4'}  w={['200px','250px']} h={['40px','50px']} 
						alignSelf={'flex-start'}
						fontSize={['12px','16px']}
						fontWeight={500}
						_hover={{
							color: 'black',
							bg: 'white'
						}}
					>
						DOWNLOAD MY RESUME
					</Button></Link>
				</VStack>
			</Stack>
		</Flex>
	);
};