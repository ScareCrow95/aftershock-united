import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import caro1 from '../../assets/img/carousel/1.png'
import caro2 from '../../assets/img/carousel/2.png'
import caro3 from '../../assets/img/carousel/3.png'
import caro4 from '../../assets/img/carousel/4.png'
import { ChakraNextImage } from '../common/ChakraNextImage'

export const HomeCarousel = () => {
  return (
    <Carousel emulateTouch infiniteLoop showStatus={false}>
      <Flex position='relative'>
        <ChakraNextImage src={caro1} w='100%' h='300px' />
        <Flex
          p={4}
          direction='column'
          position='absolute'
          w='100%'
          left='0px'
          bg='rgb(0,0,0,.6)'
          bottom='0px'
          pb='40px'
          align='flex-start'>
          <Text fontWeight='bold' fontSize='2xl' color='pr.100'>
            Non blandit massa
          </Text>
          <Text align='left'>
            Non sodales neque sodales ut etiam sit amet nisl. Ac turpis egestas
            sed tempus urna et pharetra. Rhoncus aenean vel elit scelerisque
            mauris pellentesque pulvinar. Sagittis id consectetur purus ut
            faucibus.
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <ChakraNextImage src={caro2} w='100%' h='300px' />
      </Flex>
      <Flex position='relative'>
        <ChakraNextImage src={caro3} w='100%' h='300px' />
        <Flex
          p={4}
          direction='column'
          position='absolute'
          left='0px'
          bg='rgb(0,0,0,.6)'
          bottom='0px'
          w='100%'
          pb='40px'
          align='flex-start'>
          <Text fontWeight='bold' fontSize='2xl' color='pr.100'>
            Risus feugiat in ante
          </Text>
          <Text align='left'>
            Non sodales neque sodales ut etiam sit amet nisl. Ac turpis egestas
            sed tempus urna et pharetra. Rhoncus aenean vel elit scelerisque
            mauris pellentesque pulvinar. Sagittis id consectetur purus ut
            faucibus.
          </Text>
        </Flex>
      </Flex>
      <Flex>
        <ChakraNextImage src={caro4} w='100%' h='300px' />
      </Flex>
    </Carousel>
  )
}
