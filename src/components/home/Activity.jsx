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
      <Flex align='center' direction='column' my={5}>
        <Flex wrap='wrap' justify='center'>
          {homeStore.featuredUsers.map((x) => {
            return <FeaturedUserCard data={x} key={x._id} />
          })}
        </Flex>
      </Flex>
    </Flex>
  )
})

export default Activity
