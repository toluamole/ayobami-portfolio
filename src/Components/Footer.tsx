import { chakra, Divider, Heading, Stack, Text, Link, Image } from '@chakra-ui/react';
import React from 'react';
import { Link as RLink } from 'react-router-dom';
import behance from '../Assets/svg/behance.svg';
import dribbble from '../Assets/svg/dribbble.svg';
import linkedin from '../Assets/svg/linkedin.svg';
import instagram from '../Assets/svg/instagram.svg';
import twitter from '../Assets/svg/twitter.svg';

interface IFooter{
	display: string;
}

export const Footer = ({display}:IFooter) => {
	return(
		<Stack
			bg={'#0D0D11'}
			justify={'center'}
			align={'center'}
			// maxW={'1440px'} m={'0 auto'}
			px={['5', '20']}
			py={['50px','100px']}
			spacing={10} 
			id='Contact'
			display={display}
		>
			<Text fontSize={['14px','20px']} fontWeight={400} color={'#ABA8B1'}>WANT TO TALK ABOUT A PROJECT?</Text>
			<Heading 
				as={RLink}
				to={''} 
				fontSize={['36px','100px']} 
				color={'#F8F8F8'} 
				borderBottom={'10px solid #F8F8F8'} 
				_hover={{textDecoration: 'none'}}
				onClick={() => window.location.href = 'mailto:sojiadeolu1@gmail.com'}>
					
			LET&apos;S CONNECT!</Heading>
			<Text w={['100%','760px']} fontWeight={300} fontSize={['14px','16px']} color={'#fff'} textAlign={'center'} pb={['10px','50px']}>I work at the intersection of brand and product, bringing a heavy sense of graphic design to my digital work. 
                Currently based in Calgary AB and open for remote, contract, and freelance opportunities.
			</Text>
			<Stack direction={ 'row'} justify={'center'} align={['center', 'center']}  spacing={['20px','40px']}>
				<Link as={RLink} target={'_blank'} to='https://www.behance.net/emmacreative'  color={'#fff'} p={[2,3]} border={'0.25px solid #D3D3D3'} borderRadius={'50%'}><Image w={['16px','20px']} h={['16px','20px']}  src={behance} /></Link>
				<Link as={RLink}  target={'_blank'} to='https://dribbble.com/emmacreative'  color={'#fff'} border={'0.25px solid #D3D3D3'} borderRadius={'50%'} p={[2,3]} ><Image w={['16px','20px']} h={['16px','20px']}  src={dribbble}/></Link>
				<Link as={RLink} target={'_blank'} to='https://www.instagram.com/_adeolus/'  color={'#fff'} p={[2,3]} border={'0.25px solid #D3D3D3'} borderRadius={'50%'}><Image w={['16px','20px']} h={['16px','20px']}  src={instagram}/></Link>
				<Link as={RLink} target={'_blank'} to='https://www.linkedin.com/in/ayobami-adeolu/'  color={'#fff'} p={[2,3]} border={'0.25px solid #D3D3D3'} borderRadius={'50%'}><Image w={['16px','20px']} h={['16px','20px']}  src={linkedin}/></Link>
				<Link as={RLink} target={'_blank'} to='https://www.twitter.com/_adeolus/'  color={'#fff'}  p={[2,3]} border={'0.25px solid #D3D3D3'} borderRadius={'50%'} ><Image w={['16px','20px']} h={['16px','20px']} src={twitter}/></Link>
			</Stack>
			<Divider color={'#E5E5E5'} />
			<Text 
				as={RLink}
				to={'https://www.linkedin.com/in/toluwanimi-amole/'} 
				textAlign={'center'} 
				fontWeight={300} 
				fontSize={'14px'} 
				color={'#fff'}
				
				// onClick={() => window.location.href = 'mailto:amoletoluwanimi@gmail.com'}
			>
				Site designed by <chakra.span color={'#E54927'}>Me</chakra.span> and developed by <chakra.span _hover={{ textDecoration:'underline' }} color={'#E54927'}>Toluwanimi Amole</chakra.span> 
			</Text>
		</Stack>
	);
};