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
  Tooltip,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import ClassIconElement from '../common/ClassIconElement'
import { useUIStore } from '../../provider/rootStoreProvider'
import { ChakraNextImage } from '../common/ChakraNextImage'
import { ClassAlphaBanners } from '../../assets/img/classIcon/classAssets'

function getColor(value) {
  const colors = [
    '#ff1500',
    '#ff4000',
    '#ff7300',
    '#ff9100',
    '#ffae00',
    '#ffcc00',
    '#e5ff00',
    '#bbff00',
    '#86e000',
    '#54c200',
    '#00e300',
  ]
  return colors[Math.floor(value) - 1]
}

const TierItem = observer(({ data }) => {
  const { filterClasses } = useUIStore()
  return (
    <Flex
      width='340px'
      role='group'
      bg='sec.200'
      m={4}
      direction='column'
      borderWidth='2px'
      borderColor='transparent'
      _hover={{
        transition: '200ms ease-in-out',
        borderColor: 'pr.100',
        boxShadow: 'dark-lg',
      }}>
      <Tooltip label={`Weight: ${data.weight * 100}%`} hasArrow>
        <Flex bg='sec.300' align='center' _groupHover={{ bg: 'pr.100' }}>
          <Flex direction='column' p={3}>
            <Text fontWeight='bold' _groupHover={{ color: 'sec.300' }}>
              {data.name}
            </Text>
            <Text
              fontSize='xs'
              color='grey.300'
              _groupHover={{ color: 'sec.300' }}>
              Lorem ipsum dolor sit amet, consectetur adip
            </Text>
          </Flex>
          <Spacer />
          <CircularProgress
            trackColor='sec.100'
            color='blue.100'
            size='50px'
            value={data.weight * 100}
            mr={2}>
            <CircularProgressLabel>{data.weight * 100}%</CircularProgressLabel>
          </CircularProgress>
        </Flex>
      </Tooltip>
      <Flex direction='column' mb={1}>
        {data.classes
          .sort((a, b) => b.rating - a.rating)
          .map((x, idx) => {
            return (
              <Flex
                m={2}
                my={1}
                bg='sec.300'
                role='group'
                position='relative'
                h='70px'
                align='center'
                key={x.id}
                opacity={
                  filterClasses.size === 0 || filterClasses.has(x.id) ? 1 : 0.1
                }>
                <ChakraNextImage
                  src={ClassAlphaBanners[x.id]}
                  w='275px'
                  h='70px'
                  objectFit='contain'
                  position='absolute'
                  opacity={idx === 0 ? '0.8' : '0.4'}
                  filter={idx === 0 ? 'grayscale(0%)' : 'grayscale(100%)'}
                  right={0}
                />
                <Circle
                  bg='sec.200'
                  mx={2}
                  boxSize='38px'
                  justify='center'
                  align='center'
                  display='flex'>
                  <ClassIconElement id={x.id} _w='24px' mt='5px' />
                </Circle>
                <Flex direction='column' flex={1} zIndex={1} px={4}>
                  <Flex align='center'>
                    <Text
                      fontWeight={idx === 0 ? 'semibold' : 'normal'}
                      color={idx === 0 ? 'pr.100' : 'white'}>
                      {x.id}
                    </Text>
                    <Spacer />
                    <Circle bg='sec.300' boxSize={8} shadow='dark-lg'>
                      <Text fontWeight='bold' color={getColor(x.rating)}>
                        {x.rating}
                      </Text>
                    </Circle>
                  </Flex>
                  <Flex mt='2px' h='1px' bg='border.50'>
                    <Box
                      w={`${x.rating * 10}%`}
                      h='100%'
                      bg={getColor(x.rating)}
                    />
                  </Flex>
                </Flex>
              </Flex>
            )
          })}
      </Flex>
    </Flex>
  )
})

export default TierItem
