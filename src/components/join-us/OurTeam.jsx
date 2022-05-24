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
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { ChakraNextImage } from '../common/ChakraNextImage'
import bg from '../../assets/img/wall2.png'
import HeadingContainer from '../common/HeadingContainer'
import SocialIcon from '../common/SocialIcon'
import { BsTwitch, BsDiscord, BsTwitter, BsFacebook } from 'react-icons/bs'
import { useUIStore } from '../../provider/rootStoreProvider'
const OurTeam = observer(() => {
  const uiStore = useUIStore()
  return (
    <Flex direction='column' position='relative'>
      <HeadingContainer title='Roster' />
      <Flex direction='column' position='relative' maxH='500px'>
        <ChakraNextImage src={bg} position='absolute' w='100%' h='100%' />
        <Flex
          overflowY='auto'
          direction='column'
          w='50%'
          alignSelf='center'
          css={uiStore.scrollCSS}
          backdropFilter='blur(6px)'
          zIndex={1}>
          <Flex direction='column' bg='rgb(0,0,0,.8)' w='100%'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
              return (
                <Flex
                  key={x}
                  align='center'
                  p={4}
                  mx={3}
                  borderWidth='2px'
                  borderColor='transparent'>
                  <Avatar
                    src={`https://randomuser.me/api/portraits/men/${x}.jpg`}>
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
              )
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
})

export default OurTeam
