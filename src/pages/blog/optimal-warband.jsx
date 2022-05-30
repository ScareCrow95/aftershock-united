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
  Divider,
  Spacer,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { ChakraNextImage } from '../../components/common/ChakraNextImage'
import { _homeData } from '../../constants/data/_home'
import { Blog } from '../../store/classes/Blog'
import ClassIconElement from '../../components/common/ClassIconElement'
import HeadingContainer from '../../components/common/HeadingContainer'
import { ClassBanners } from '../../assets/img/classIcon/classAssets'

const RankItem = ({ id, rank, name }) => {
  return (
    <Flex
      m={1}
      align='center'
      w='250px'
      bg='sec.200'
      borderWidth='1px'
      borderColor='transparent'
      _hover={{
        boxShadow: 'dark-lg',
        transform: 'scale(1.05)',
        transition: '200ms ease',
        borderColor: 'orange',
      }}>
      <Flex bg='sec.300' h='100%' px={4} align='center' justify='center'>
        <Text fontWeight='bold' fontSize='xl'>
          {rank}
        </Text>
      </Flex>
      <Spacer />
      <Flex p={1} align='center'>
        <Text>{name}</Text>
        <ClassIconElement id={id} ml={3} mt='3px' />
      </Flex>
    </Flex>
  )
}

const OptimalWarband = observer(({ data }) => {
  /**
   * @type {Blog}
   */
  const blog = data

  return (
    <Flex
      borderLeftWidth={[0, 0, 0, 0, '3px']}
      borderRightWidth={[0, 0, 0, 0, '3px']}
      borderLeftColor='pr.100'
      borderRightColor='pr.100'
      direction='column'
      boxShadow='dark-lg'
      flex={1}
      bg='sec.100'>
      <Flex p={8} bg='sec.200'>
        <Avatar src={blog.createdBy.avatar} size='2xl' p={1} bg='sec.200' />
        <Flex direction='column' ml={4} justify='center'>
          <Text color='grey.200'>
            Written By{' '}
            <Text as='span' fontWeight='semibold' color='pr.100'>
              {blog.createdBy.name}
            </Text>
          </Text>
          <Text>{new Date(blog.createdOn).toLocaleDateString()}</Text>
          <Text fontWeight='bold' fontSize='2xl'>
            {blog.title}
          </Text>
        </Flex>
      </Flex>
      <Divider />
      <Flex direction='column' p={8} lineHeight={2}>
        <Text>
          The optimal warband is something that will most likely remain mostly
          the same in-terms of wanting each class because of how the game is
          designed. There are 8 spots available in a warband, and there are 6
          classes in Diablo Immortal on launch, which means 6 of the 8 spots are
          pretty logical. You should strive to have at least 1 of each class
          because this will allow your group to evolve with the game and have
          what you need for different situations in all forms of content.
        </Text>
        <Text mt={4}>
          This means after having a <ClassIconElement id='barbarian' />{' '}
          Barbarian, <ClassIconElement id='crusader' />
          Crusader, <ClassIconElement id='demonHunter' />
          Demon Hunter, <ClassIconElement id='monk' />
          Monk, <ClassIconElement id='necromancer' /> Necromancer, and{' '}
          <ClassIconElement id='wizard' /> Wizard, we are left with 2 remaining
          slots in our warband as flex spots. The game is designed in a way
          where half of the classes are primarily melee, and the other half are
          primarily ranged. This means we can stay balanced by splitting these 2
          flex spots between 1 melee, and 1 ranged class. So for our first flex
          spot this means choosing either another Barbarian, Crusader, or Monk,
          and for our second flex spot this means choosing either another Demon
          Hunter, Necromancer, or Wizard. I think as of now there are no
          terrible choices for these last 2 flex spots as we will be learning a
          ton about the game in the near future, and Blizzard will surely strive
          to balance things in a way that all classes will be included. If I
          were forced to pick one optimal warband set-up to recommend it would
          be filling the last 2 flex spots with Crusader and Demon Hunter,
          resulting in a warband that looks like this.
        </Text>
      </Flex>
      <Divider />
      <HeadingContainer title='Optimal Warband Example' />
      <Flex direction='column' align='center' mb={8}>
        <RankItem id='crusader' rank={1} name='Crusader' />
        <RankItem id='barbarian' rank={2} name='Barbarian' />
        <RankItem id='monk' rank={3} name='Monk' />
        <RankItem id='demonHunter' rank={4} name='demonHunter' />
        <RankItem id='necromancer' rank={5} name='Necromancer' />
        <RankItem id='wizard' rank={6} name='Wizard' />
        <RankItem id='crusader' rank={7} name='Crusader' />
        <RankItem id='demonHunter' rank={8} name='demonHunter' />
      </Flex>
    </Flex>
  )
})

export default OptimalWarband

export async function getStaticProps(context) {
  /**
   * get Data later
   */
  const data = _homeData.trending.find((x) => x._id === 'optimal-warband')
  return {
    props: {
      data,
    },
  }
}
