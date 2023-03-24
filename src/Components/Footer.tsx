import { chakra, Divider, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
	return(
		<Stack
			bg={'#0D0D11'}
			justify={'center'}
			align={'center'}
			// maxW={'1440px'} m={'0 auto'}
			px={['5', '20']}
			py={['50px','100px']}
			spacing={10} id='Contact'
		>
			<Text fontSize={['14px','20px']} fontWeight={400} color={'#ABA8B1'}>WANT TO TALK ABOUT A PROJECT?</Text>
			<Heading fontSize={['36px','100px']} color={'#F8F8F8'} borderBottom={'2px solid #F8F8F8'}>LET&apos;S CONNECT!</Heading>
			<Text w={['100%','70%']} fontWeight={300} fontSize={['14px','16px']} color={'#fff'} textAlign={'center'} pb={['10px','50px']}>I work at the intersection of brand and product, bringing a heavy sense of graphic design to my digital work. 
                Currently based in Lagos and open for remote, contract, and freelance opportunities.
			</Text>
			<Stack direction={['column', 'row']} justify={'center'} align={['center', 'center']} wrap={'wrap'} spacing={['40px','60px']}>
				<Link target={'_blank'} href='https://www.behance.net/emmacreative'  _hover={{color:'#E54927'}} fontSize={['14px','14px']} color={'#fff'} textDecoration={'underline'}>BEHANCE</Link>
				<Link target={'_blank'} href='https://www.instagram.com/_adeolus/'  _hover={{color:'#E54927'}} fontSize={['14px','14px']} color={'#fff'} textDecoration={'underline'}>INSTAGRAM</Link>
				<Link target={'_blank'} href='https://dribbble.com/emmacreative'  _hover={{color:'#E54927'}} fontSize={['14px','14px']} color={'#fff'} textDecoration={'underline'}>DRIBBLE</Link>
				<Link target={'_blank'} href='https://www.twitter.com/_adeolus/'  _hover={{color:'#E54927'}} fontSize={['14px','14px']} color={'#fff'} textDecoration={'underline'}>TWITTER</Link>
				<Link target={'_blank'} href='https://www.linkedin.com/in/ayobami-adeolu/'  _hover={{color:'#E54927'}} fontSize={['14px','14px']} color={'#fff'} textDecoration={'underline'}>LINKEDIN</Link>
			</Stack>
			<Divider color={'#E5E5E5'} />
			<Text textAlign={'center'} fontWeight={300} fontSize={'14px'} color={'#fff'}>Site designed by <chakra.span color={'#E54927'}>Me</chakra.span> and developed by <chakra.span color={'#E54927'}>Toluwanimi Amole</chakra.span> </Text>
		</Stack>
	);
};