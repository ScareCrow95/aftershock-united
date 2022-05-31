import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  useRadio,
  Divider,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import bg from '../../assets/img/wall3.png'
import { ChakraNextImage } from '../../components/common/ChakraNextImage'
import { _homeData } from '../../constants/data/_home'
import { User } from '../../store/classes/User'
import { CreatorAssets } from '../../assets/img/creators/creatorsAsset'
import SocialIcon from '../../components/common/SocialIcon'
import { BsTwitch, BsDiscord, BsTwitter, BsYoutube } from 'react-icons/bs'

const UserItem = ({ data }) => {
  /**
   * @type {User}
   */
  const user = data
  return (
    <Flex
      direction='column'
      role='group'
      m={4}
      align='center'
      mb={8}
      border='1px'
      rounded='lg'
      _hover={{ shadow: 'dark-lg' }}
      p={2}
      borderColor='border.25'>
      <Flex position='relative' mt={4}>
        <Circle bg='sec.300' boxSize='160px' overflow='hidden' shadow='dark-lg'>
          <ChakraNextImage
            mb='-20px'
            src={CreatorAssets[data._id]}
            boxSize='150px'
            filter='grayscale(100%)'
          />
        </Circle>
      </Flex>
      <Text
        mt={4}
        fontWeight='semibold'
        fontSize='xl'
        _groupHover={{ color: 'pr.100' }}>
        {user.name}
      </Text>
      <Flex mt={4}>
        <SocialIcon
          color='grey.300'
          icon={BsTwitch}
          hover='#A970FF'
          boxSize={5}
          mr={4}
          onClick={() => {
            window.open(user.social.twitch, '_blank').focus()
          }}
        />
        <SocialIcon
          color='grey.300'
          icon={BsTwitter}
          hover='#1D9BF0'
          boxSize={5}
          mr={4}
          onClick={() => {
            window.open(user.social.twitter, '_blank').focus()
          }}
        />
        <SocialIcon
          color='grey.300'
          icon={BsYoutube}
          hover='red'
          boxSize={5}
          mr={4}
          onClick={() => {
            window.open(user.social.youtube, '_blank').focus()
          }}
        />
        <SocialIcon
          color='grey.300'
          icon={BsDiscord}
          hover='#5662F6'
          boxSize={5}
          mr={2}
        />
      </Flex>
      <Divider my={4} />
      <Text
        w='350px'
        fontSize='sm'
        px={4}
        color='grey.300'
        _groupHover={{ color: 'grey.200' }}>
        {user.about}
      </Text>
    </Flex>
  )
}

const index = observer(() => {
  return (
    <Flex
      borderLeftWidth={[0, 0, 0, 0, '3px']}
      borderRightWidth={[0, 0, 0, 0, '3px']}
      borderLeftColor='pr.100'
      borderRightColor='pr.100'
      direction='column'
      boxShadow='dark-lg'
      bg='sec.100'>
      <Flex direction='column' position='relative' shadow='dark-lg'>
        <ChakraNextImage
          src={bg}
          w='100%'
          h={['200px', '200px', '400px']}
          objectFit='cover'
          filter='grayscale(100%)'
        />
        <Flex
          position='absolute'
          justify='center'
          align='center'
          direction='column'
          w='100%'
          h='100%'>
          <Text fontSize='4xl' mb='-30px'>
            MEET OUR
          </Text>
          <Text
            fontWeight='bold'
            fontSize='8xl'
            color='pr.100'
            textShadow='0 0 15px black'>
            TEAM
          </Text>
        </Flex>
      </Flex>
      <Flex justify='center' wrap='wrap' mt={8}>
        {_homeData.creators?.map((x) => {
          return <UserItem key={x._id} data={x} />
        })}
      </Flex>
    </Flex>
  )
})

export default index
