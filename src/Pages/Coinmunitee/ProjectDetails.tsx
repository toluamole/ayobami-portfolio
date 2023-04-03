import { Box, Heading, Stack, Text, Image, Grid, GridItem} from '@chakra-ui/react';
import React, { useRef } from 'react';
import clickIcon from '../../Assets/svg/clickIcon.svg';
import security from '../../Assets/svg/security.svg';
import fastDelivery from '../../Assets/svg/fast-delivery.svg';
import hand from '../../Assets/svg/hand.svg';
import decentralized from '../../Assets/svg/decentralized.svg';
import { useInView } from 'framer-motion';
import { MotionBox } from '../LoopApp/ProjectDescription';

export const ProjectDetails = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return(
		<Box ref={ref}>
			<MotionBox
				style={{
					opacity: isInView ? 1 : 0,
					transition: 'all .5s ease-in'
				}}
			>
				<Stack spacing={8} mb={'50px'} >
					<Heading fontSize={['24px','36px']} color={'#ABA8B1'}>PROBLEM STATEMENT</Heading>
					<Text fontSize={['14px','18px']} fontWeight={400} color={'#ABA8B1'}>
						The crypto industry is a massive one but despite it’s potential and apparent benefits many people are uninterested or have a downright distaste for it. 
						People will prefer to stick to the traditional banking system cause the concept of crypto currency is alien to them, the whole idea of trading in crypto currency is a scam to them.
					</Text>
					<Text fontSize={['14px','18px']} fontWeight={400} color={'#ABA8B1'}>
						The average crypto users finds it frustrating that when they need urgent fund to pay some bills, 
						converting the crypto in their wallets isn’t as smooth as it should be compared to transactions involving their local banks. 
						This in turn still hinders the growth of cryptocurrency as much as the industry is growing, it is not reaching it’s full potential. 
						Making crypto mainstream is critical in our evolution as it is the FUTURE.
					</Text>
					<Text fontSize={['16px','20px']} fontWeight={400} color={'#ABA8B1'}>
						COINMUNITEE IS A GAMECHANGER
					</Text>
				</Stack>
			</MotionBox>
			<MotionBox
				style={{
					opacity: isInView ? 1 : 0,
					transition: 'all .5s ease-in'
				}}
			>
				<Stack direction={['column', 'row']} spacing={36} mb={'50px'} justify={'space-between'} align={['start','center']}>
					<Text fontSize={['18px']} fontWeight={700} color={'#ABA8B1'}>
						Why Coinmunitee is Valuable?
					</Text>
				</Stack>
				<Grid templateColumns={['repeat(1, 1fr)', 'repeat(6, 1fr)' ]} gap={[10,16]} >
					<GridItem colSpan={2} >
						<Stack>
							<Image w={'40px'} h={'40px'} src={clickIcon}/>
							<Text fontSize={['16px','20px']} fontWeight={'700'} color={'#ABA8B1'}>EASY FOR USERS</Text>
							<Text fontSize={['14px','18px']} fontWeight={'400'} color={'#ABA8B1'} w={['auto','270px']}>
								The app design is simple with minimalistic design requiring little or no help to use.
							</Text>
						</Stack>
					</GridItem>
					<GridItem colSpan={2}  >
						<Stack>
							<Image w={'40px'} h={'40px'} src={security}/>
							<Text fontSize={['16px','20px']} fontWeight={'700'} color={'#ABA8B1'}>SAFE</Text>
							<Text fontSize={['14px','18px']} fontWeight={'400'} color={'#ABA8B1'} w={['auto','270px']}>
								We rely on a combination of smart contracts and escrow system to protect users
							</Text>
						</Stack>
					</GridItem>
					<GridItem colSpan={2} >
						<Stack>
							<Image w={'40px'} h={'40px'} src={fastDelivery}/>
							<Text fontSize={['16px','20px']} fontWeight={'700'} color={'#ABA8B1'}>FAST</Text>
							<Text fontSize={['14px','18px']} fontWeight={'400'} color={'#ABA8B1'}w={['auto','270px']}>
								Settlement is nearly instantaneous, no need for a 2 hours wait time.
							</Text>
						</Stack>
					</GridItem>
					<GridItem colSpan={2}   >
						<Stack>
							<Image w={'40px'} h={'40px'} src={decentralized}/>
							<Text fontSize={['16px','20px']} fontWeight={'700'} color={'#ABA8B1'}>DECENTRALIZED</Text>
							<Text fontSize={['14px','18px']} fontWeight={'400'} color={'#ABA8B1'} w={['auto','270px']}>
								Liquidity is secured by a network of market makers
							</Text>
						</Stack>
					</GridItem>
					<GridItem colSpan={2}  >
						<Stack>
							<Image w={'40px'} h={'40px'} src={hand}/>
							<Text fontSize={['16px','20px']} fontWeight={'700'} color={'#ABA8B1'}>REASONABLY PRICED</Text>
							<Text fontSize={['14px','18px']} fontWeight={'400'} color={'#ABA8B1'} w={['auto','270px']}>
								We charge up to 2.5% fee per transaction. Very simple and plain
							</Text>
						</Stack>
					</GridItem>
					<GridItem colSpan={2}  >
						<Stack>
							<Image w={'40px'} h={'40px'} src={clickIcon}/>
							<Text fontSize={['16px','20px']} fontWeight={'700'} color={'#ABA8B1'}>EMBEDDABLE</Text>
							<Text fontSize={['14px','18px']} fontWeight={'400'} color={'#ABA8B1'} w={['auto','270px']}>
								Implementation is a few lines of codes. No biggy
							</Text>
						</Stack>
					</GridItem>
				</Grid>
			</MotionBox>
		</Box>
	);
};