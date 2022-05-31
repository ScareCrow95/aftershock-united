import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Circle, Icon, Spacer } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import icon from '../../assets/img/diablo-icon.png'
import { ChakraNextImage } from '../common/ChakraNextImage'
import { BsTwitch, BsDiscord, BsTwitter, BsFacebook } from 'react-icons/bs'
import SocialIcon from '../common/SocialIcon'
const Header = observer(() => {
  return (
    <Flex bg='sec.300' p={4} align='center'>
      <ChakraNextImage src={icon} boxSize={6} />
      <Text ml={2} fontWeight='semibold'>
        Diablo Immortal
      </Text>
      <Spacer />
      {/* <SocialIcon
        color='grey.300'
        icon={BsTwitch}
        hover='#A970FF'
        boxSize={5}
        mr={4}
      />
      <SocialIcon
        color='grey.300'
        icon={BsTwitter}
        hover='#1D9BF0'
        boxSize={5}
        mr={4}
      />
      <SocialIcon
        color='grey.300'
        icon={BsFacebook}
        hover='#3982E4'
        boxSize={5}
        mr={4}
      />
      <SocialIcon
        color='grey.300'
        icon={BsDiscord}
        hover='#5662F6'
        boxSize={5}
        mr={2}
      /> */}
    </Flex>
  )
})

export default Header
