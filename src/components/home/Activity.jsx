import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Avatar,
  AvatarBadge,
  Spacer,
  Divider,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import twitch from '../../assets/img/twitch.png'
import utube from '../../assets/img/youtube.webp'
import { ChakraNextImage } from '../common/ChakraNextImage'
import { FaVideo, FaStar } from 'react-icons/fa'
import { BsTwitch, BsDiscord, BsTwitter, BsFacebook } from 'react-icons/bs'

import SocialIcon from '../common/SocialIcon'
const Activity = observer(() => {
  return (
    <Flex direction='column'>
      <Flex align='center' direction='column'>
        <Flex align='center'>
          <Icon as={FaStar} boxSize={8} mr={4} color='pr.100' />
          <Text fontWeight='bold' fontSize='2xl'>
            Featured Creators
          </Text>
        </Flex>
        <Flex p={4} my={4}>
          <Flex
            align='center'
            bg='sec.200'
            p={4}
            mx={3}
            borderWidth='2px'
            borderColor='transparent'
            _hover={{
              transform: 'scale(1.04)',
              transition: '200ms',
              borderColor: 'pr.100',
              boxShadow: 'dark-lg',
            }}>
            <Avatar src='https://randomuser.me/api/portraits/men/22.jpg'>
              <AvatarBadge boxSize='1em' bg='green.500' />
            </Avatar>
            <Flex direction='column' ml={4}>
              <Text fontWeight='semibold'>Martin Hernandez</Text>
              <Flex mt={1}>
                <SocialIcon
                  color='grey.300'
                  icon={BsTwitch}
                  hover='#A970FF'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsTwitter}
                  hover='#1D9BF0'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsFacebook}
                  hover='#3982E4'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsDiscord}
                  hover='#5662F6'
                  boxSize={4}
                  mr={2}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            align='center'
            bg='sec.200'
            p={4}
            mx={3}
            borderWidth='2px'
            borderColor='transparent'
            _hover={{
              transform: 'scale(1.04)',
              transition: '200ms',
              borderColor: 'pr.100',
              boxShadow: 'dark-lg',
            }}>
            <Avatar src='https://randomuser.me/api/portraits/men/8.jpg'>
              <AvatarBadge boxSize='1em' bg='green.500' />
            </Avatar>
            <Flex direction='column' ml={4}>
              <Text fontWeight='semibold'>Cody Wagner</Text>
              <Flex mt={1}>
                <SocialIcon
                  color='grey.300'
                  icon={BsTwitch}
                  hover='#A970FF'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsTwitter}
                  hover='#1D9BF0'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsFacebook}
                  hover='#3982E4'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsDiscord}
                  hover='#5662F6'
                  boxSize={4}
                  mr={2}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex
            align='center'
            bg='sec.200'
            p={4}
            mx={3}
            borderWidth='2px'
            borderColor='transparent'
            _hover={{
              transform: 'scale(1.04)',
              transition: '200ms',
              borderColor: 'pr.100',
              boxShadow: 'dark-lg',
            }}>
            <Avatar src='https://randomuser.me/api/portraits/men/3.jpg'>
              <AvatarBadge boxSize='1em' bg='green.500' />
            </Avatar>
            <Flex direction='column' ml={4}>
              <Text fontWeight='semibold'>Jeremy Rogers</Text>
              <Flex mt={1}>
                <SocialIcon
                  color='grey.300'
                  icon={BsTwitch}
                  hover='#A970FF'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsTwitter}
                  hover='#1D9BF0'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsFacebook}
                  hover='#3982E4'
                  boxSize={4}
                  mr={2}
                />
                <SocialIcon
                  color='grey.300'
                  icon={BsDiscord}
                  hover='#5662F6'
                  boxSize={4}
                  mr={2}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider />
      <Flex justify='center' pt={8}>
        <Flex direction='column'>
          <Flex align='center'>
            <ChakraNextImage src={twitch} boxSize={8} />
            <Text fontSize='xl' ml={3} fontWeight='semibold'>
              Live Streamers
            </Text>
          </Flex>
          <Flex direction='column' mt={8}>
            <Flex align='center' w='200px' mb={4}>
              <Avatar name='ChoflyChosen'>
                <AvatarBadge boxSize='1em' bg='green.500' />
              </Avatar>
              <Text fontWeight='semibold' ml={2}>
                ChoflyChosen
              </Text>
              <Spacer />
              <Icon as={FaVideo} boxSize={5} color='pr.100' />
            </Flex>
            <Flex align='center' w='200px' mb={4}>
              <Avatar name='Aaron Rock'>
                <AvatarBadge boxSize='1em' bg='green.500' />
              </Avatar>
              <Text fontWeight='semibold' ml={2}>
                Aron Rock
              </Text>
              <Spacer />
              <Icon as={FaVideo} boxSize={5} color='pr.100' />
            </Flex>
            <Flex align='center' w='200px' mb={4}>
              <Avatar name='EGC TV'>
                <AvatarBadge boxSize='1em' bg='green.500' />
              </Avatar>
              <Text fontWeight='semibold' ml={2}>
                EGC TV
              </Text>
              <Spacer />
              <Icon as={FaVideo} boxSize={5} color='pr.100' />
            </Flex>
          </Flex>
        </Flex>
        <Box h='100%' w='1px' bg='border.25' mx={16} />
        <Flex direction='column'>
          <Flex align='center'>
            <ChakraNextImage src={utube} boxSize={8} objectFit='contain' />
            <Text fontSize='xl' ml={3} fontWeight='semibold'>
              Youtubers
            </Text>
          </Flex>
          <Flex direction='column' mt={8}>
            <Flex align='center' w='200px' mb={4}>
              <Avatar name='ChoflyChosen'>
                <AvatarBadge boxSize='1em' bg='green.500' />
              </Avatar>
              <Text fontWeight='semibold' ml={2}>
                ChoflyChosen
              </Text>
              <Spacer />
              <Icon as={FaVideo} boxSize={5} color='pr.100' />
            </Flex>
            <Flex align='center' w='200px' mb={4}>
              <Avatar name='Aaron Rock'>
                <AvatarBadge boxSize='1em' bg='green.500' />
              </Avatar>
              <Text fontWeight='semibold' ml={2}>
                Aron Rock
              </Text>
              <Spacer />
              <Icon as={FaVideo} boxSize={5} color='pr.100' />
            </Flex>
            <Flex align='center' w='200px' mb={4}>
              <Avatar name='EGC TV'>
                <AvatarBadge boxSize='1em' bg='green.500' />
              </Avatar>
              <Text fontWeight='semibold' ml={2}>
                EGC TV
              </Text>
              <Spacer />
              <Icon as={FaVideo} boxSize={5} color='pr.100' />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
})

export default Activity
