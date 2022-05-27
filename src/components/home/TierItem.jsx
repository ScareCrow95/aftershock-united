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
      width='240px'
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
      <Flex direction='column' py={2} pr={2}>
        {data.classes
          .sort((a, b) => b.rating - a.rating)
          .map((x, idx) => {
            return (
              <Flex
                align='center'
                key={x.id}
                p={2}
                opacity={
                  filterClasses.size === 0 || filterClasses.has(x.id) ? 1 : 0.1
                }>
                <Circle
                  bg='sec.300'
                  mr={2}
                  boxSize='38px'
                  justify='center'
                  align='center'
                  display='flex'>
                  <ClassIconElement id={x.id} _w='24px' mt='5px' />
                </Circle>
                <Flex direction='column' flex={1}>
                  <Flex>
                    <Text
                      fontWeight={idx === 0 ? 'semibold' : 'normal'}
                      color={idx === 0 ? 'pr.100' : 'white'}>
                      {x.id}
                    </Text>
                    <Spacer />
                    <Text fontWeight='bold' color={getColor(x.rating)}>
                      {x.rating}
                    </Text>
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
