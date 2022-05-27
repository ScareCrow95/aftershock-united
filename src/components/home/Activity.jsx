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
import { useHomeStore } from '../../provider/rootStoreProvider'
import FeaturedUserCard from './FeaturedUserCard'
import HeadingContainer from '../common/HeadingContainer'
import { truncateString } from '../../constants/utils'

const Activity = observer(() => {
  const homeStore = useHomeStore()
  return (
    <Flex direction='column'>
      <HeadingContainer title='Featured Users' />
      <Flex align='center' direction='column' mt={5}>
        <Flex>
          {homeStore.featuredUsers.map((x) => {
            return <FeaturedUserCard data={x} key={x._id} />
          })}
        </Flex>
      </Flex>
      <HeadingContainer title='Aftershock Creators' my={4} />
      <Flex mb={4} justify='center'>
        {homeStore.liveStreamers.map((x) => {
          return (
            <Flex
              key={x._id}
              m={4}
              rounded='full'
              direction='column'
              align='center'>
              <Avatar
                size='lg'
                src={x.avatar}
                alt={x.name}
                boxShadow='0 0 20px black'>
                <AvatarBadge border='0'>
                  <ChakraNextImage src={twitch} boxSize={8} />
                </AvatarBadge>
              </Avatar>
              <Text mt={3} fontSize='sm' fontWeight='semibold'>
                {truncateString(x.name, 10)}
              </Text>
            </Flex>
          )
        })}
        {homeStore.youtubers.map((x) => {
          return (
            <Flex
              key={x._id}
              m={4}
              rounded='full'
              direction='column'
              align='center'>
              <Avatar
                size='lg'
                src={x.avatar}
                alt={x.name}
                boxShadow='0 0 20px black'>
                <AvatarBadge border='0'>
                  <ChakraNextImage
                    src={utube}
                    boxSize={8}
                    objectFit='contain'
                  />
                </AvatarBadge>
              </Avatar>
              <Text mt={3} fontSize='sm' fontWeight='semibold'>
                {truncateString(x.name, 10)}
              </Text>
            </Flex>
          )
        })}
      </Flex>
    </Flex>
  )
})

export default Activity
