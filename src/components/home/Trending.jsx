import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useHomeStore, useUIStore } from '../../provider/rootStoreProvider'
import caro1 from '../../assets/img/carousel/4.png'
import { ChakraNextImage } from '../common/ChakraNextImage'
import HeadingContainer from '../common/HeadingContainer'
import TrendingBlogItem from './TrendingBlogItem'
const Trending = observer(() => {
  const uiStore = useUIStore()
  const homeStore = useHomeStore()
  return (
    <Flex direction='column'>
      <HeadingContainer title='Trending' />
      <Flex wrap='wrap' justify='center'>
        {homeStore.trending.map((x) => {
          return <TrendingBlogItem key={x._id} data={x} />
        })}
      </Flex>
    </Flex>
  )
})

export default Trending
