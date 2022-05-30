import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Spacer,
  Button,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import HeadingContainer from '../common/HeadingContainer'
import { useUIStore } from '../../provider/rootStoreProvider'
import { Tiers } from '../../constants/data/_tier'
import { ChakraNextImage } from '../common/ChakraNextImage'
import {
  ClassIcons,
  ClassSQBanners,
} from '../../assets/img/classIcon/classAssets'
import { useRouter } from 'next/router'

const OverallRanking = observer(({ desc }) => {
  const [overall] = Tiers.slice(-1)
  const router = useRouter()

  return (
    <Flex direction='column'>
      <HeadingContainer title='Overall Ranking' my={5}>
        {desc && (
          <Button
            bg='pr.100'
            color='black'
            size='xs'
            onClick={() => router.push('/tiers')}>
            Read More
          </Button>
        )}
      </HeadingContainer>
      <Flex justify='center' wrap='wrap'>
        {overall.classes
          .sort((a, b) => b.rating - a.rating)
          .map((x, idx) => {
            return (
              <Flex
                key={x.id}
                m={2}
                position='relative'
                borderWidth='2px'
                borderColor='transparent'
                cursor='pointer'
                _hover={{
                  transition: '200ms ease-in-out',
                  borderColor: 'pr.100',
                  boxShadow: 'dark-lg',
                }}>
                <ChakraNextImage
                  src={ClassSQBanners[x.id]}
                  w='200px'
                  h='300px'
                  objectFit='contain'
                />
                <ChakraNextImage
                  src={ClassIcons[x.id]}
                  boxSize='40px'
                  position='absolute'
                  top='12px'
                  right='12px'
                />
                <Flex
                  position='absolute'
                  bottom='0'
                  p={4}
                  bg='rgb(0,0,0,.5)'
                  w='100%'>
                  <Text fontWeight='semibold'>{x.id.toUpperCase()}</Text>
                  <Spacer />
                  <Circle
                    bg='pr.100'
                    boxSize={7}
                    fontSize='sm'
                    color='black'
                    fontWeight='bold'>
                    <Text>{x.rating.toFixed(1)}</Text>
                  </Circle>
                </Flex>
              </Flex>
            )
          })}
      </Flex>
    </Flex>
  )
})

export default OverallRanking
