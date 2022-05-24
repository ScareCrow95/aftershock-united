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
  Spacer,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { User } from '../../store/classes/User'
import { GRADIENT, GRADIENT_GRAY } from '../../constants/uiData'
import { RiVipDiamondFill } from 'react-icons/ri'
import ReactCountryFlag from 'react-country-flag'
import { truncateString } from '../../constants/utils'
import { BsTwitch, BsDiscord, BsTwitter, BsFacebook } from 'react-icons/bs'
import SocialIcon from '../common/SocialIcon'
import { ChakraNextImage } from '../common/ChakraNextImage'
import { ClassIcons } from '../../assets/img/classIcon/classAssets'
import { useUIStore } from '../../provider/rootStoreProvider'

const FeaturedUserCard = observer(({ data }) => {
  const uiStore = useUIStore()
  /**
   * @type {User}
   */
  const user = data
  return (
    <Flex
      w={64}
      position='relative'
      justify='center'
      m={4}
      mx={2}
      zIndex={2}
      p='1px'
      bg={GRADIENT}
      _before={{
        content: '""',
        background: GRADIENT,
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 0,
        opacity: 0.3,
        filter: 'blur(6px)',
      }}>
      <Flex bg='sec.200' flex={1} zIndex={1} direction='column'>
        <Flex
          align='center'
          justify='center'
          bg={GRADIENT_GRAY}
          p={8}
          position='relative'>
          <ChakraNextImage
            src={ClassIcons[user.main]}
            boxSize={8}
            position='absolute'
            _hover={{ opacity: 0.4 }}
            onMouseEnter={(e) => {
              uiStore.setPopover(e, user.main)
            }}
            onMouseLeave={(e) => {
              uiStore.popover = null
            }}
            top='0'
            left='0'
            m={4}
          />
          <Circle p={1} bg='border.25'>
            <Avatar src={user.avatar} size='2xl' alt='user' rounded='full' />
          </Circle>
        </Flex>
        <Flex p={3} bg='sec.100' direction='column'>
          <Flex align='center' flex={1}>
            <Icon as={RiVipDiamondFill} color='pr.100' mr={2} />
            <Text fontWeight='semibold'>{user.name}</Text>
            <Spacer />
            <ReactCountryFlag countryCode='US' svg style={{ width: '2em' }} />
          </Flex>
          <Text mt={2} fontSize='sm'>
            {truncateString(user.about, 80)}
          </Text>
        </Flex>
        <Flex align='center' justify='center' p={4}>
          <SocialIcon
            color='grey.300'
            icon={BsTwitch}
            hover='#A970FF'
            boxSize={6}
            mr={4}
          />
          <SocialIcon
            color='grey.300'
            icon={BsTwitter}
            hover='#1D9BF0'
            boxSize={6}
            mr={4}
          />
          <SocialIcon
            color='grey.300'
            icon={BsFacebook}
            hover='#3982E4'
            boxSize={6}
            mr={4}
          />
          <SocialIcon
            color='grey.300'
            icon={BsDiscord}
            hover='#5662F6'
            boxSize={6}
            mr={2}
          />
        </Flex>
      </Flex>
    </Flex>
  )
})

export default FeaturedUserCard
