import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useUIStore } from '../../provider/rootStoreProvider'
import caro1 from '../../assets/img/carousel/4.png'
import { ChakraNextImage } from '../common/ChakraNextImage'
const Trending = observer(() => {
  const uiStore = useUIStore()
  return (
    <Flex direction='column'>
      <Flex bg='sec.300' mt={8} position='relative'>
        <Text fontSize='2xl' fontWeight='semibold' p={4} color='pr.100'>
          Trending
        </Text>
      </Flex>
      <Flex p={12} align='center' justify='center'>
        <Flex
          direction='column'
          p={8}
          bg='sec.200'
          w='360px'
          h='430px'
          overflowY='auto'
          borderWidth='2px'
          borderColor='transparent'
          _hover={{
            transform: 'scale(1.04)',
            transition: '200ms',
            borderColor: 'pr.100',
            boxShadow: 'dark-lg',
          }}
          mr={8}
          css={uiStore.scrollCSS}>
          <Text fontSize='2xl' fontWeight='semibold'>
            Sem integer vitae justo eget. Amet consectetur adipiscing
          </Text>
          <Text mt={3} color='grey.300'>
            Risus feugiat in ante metus dictum at tempor commodo. Proin nibh
            nisl condimentum id venenatis a. Nibh mauris cursus mattis molestie
            a iaculis. Lacus laoreet non curabitur gravida. Aliquet sagittis id
            consectetur purus ut faucibus. Amet facilisis magna etiam tempor
            orci eu lobortis elementum nibh. Sit amet tellus cras adipiscing
            enim...
          </Text>
        </Flex>
        <Flex
          direction='column'
          bg='sec.200'
          w='360px'
          h='430px'
          overflow='clip'
          borderWidth='2px'
          borderColor='transparent'
          _hover={{
            transform: 'scale(1.04)',
            transition: '200ms',
            borderColor: 'pr.100',
            boxShadow: 'dark-lg',
          }}
          mr={8}
          css={uiStore.scrollCSS}>
          <Text fontSize='2xl' fontWeight='semibold' p={4}>
            Sem integer vitae justo eget. Amet consectetur adipiscing
          </Text>
          <ChakraNextImage src={caro1} w='360px' h='430px' />
        </Flex>
        <Flex
          direction='column'
          p={8}
          bg='sec.200'
          w='360px'
          h='430px'
          overflowY='auto'
          borderWidth='2px'
          borderColor='transparent'
          _hover={{
            transform: 'scale(1.04)',
            transition: '200ms',
            borderColor: 'pr.100',
            boxShadow: 'dark-lg',
          }}
          mr={8}
          css={uiStore.scrollCSS}>
          <Text fontSize='2xl' fontWeight='semibold'>
            Sem integer vitae justo eget. Amet consectetur adipiscing
          </Text>
          <Text mt={3} color='grey.300'>
            Risus feugiat in ante metus dictum at tempor commodo. Proin nibh
            nisl condimentum id venenatis a. Nibh mauris cursus mattis molestie
            a iaculis. Lacus laoreet non curabitur gravida. Aliquet sagittis id
            consectetur purus ut faucibus. Amet facilisis magna etiam tempor
            orci eu lobortis elementum nibh. Sit amet tellus cras adipiscing
            enim...
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
})

export default Trending
