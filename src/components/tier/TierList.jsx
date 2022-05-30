import React, { useState, useEffect } from 'react'
import {
  Box,
  Divider,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Checkbox,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import HeadingContainer from '../common/HeadingContainer'
import { Tiers } from '../../constants/data/_tier'
import TierItem from './TierItem'
import { ClassIcons } from '../../assets/img/classIcon/classAssets'
import ClassIconElement from '../common/ClassIconElement'
import { useUIStore } from '../../provider/rootStoreProvider'

const TierList = observer(() => {
  const { filterClasses } = useUIStore()
  return (
    <Flex direction='column'>
      <HeadingContainer title='Tier List' my={5} />
      <Text p={6} pb={0} color='grey.300' textAlign='center'>
        Current overall class rankings adjusted to take into account predicted
        performance throughout all relevant areas in the game. Adjusted to
        weight different more important areas to be worth more than other less
        important areas. Will be updated regularly to be as accurate as possible
        as we gather more information and input.
      </Text>
      <Divider my={4} />
      <Flex direction='column' align='center'>
        <Text fontWeight='semibold' color='grey.200'>
          Filter By Classes
        </Text>
        <Flex mt={3}>
          {Object.keys(ClassIcons).map((x) => {
            return (
              <Flex key={x}>
                <Circle
                  bg='sec.200'
                  boxSize='40px'
                  mx={1}
                  cursor='pointer'
                  onClick={() => {
                    if (filterClasses.has(x)) filterClasses.delete(x)
                    else filterClasses.add(x)
                  }}
                  border='1px'
                  shadow={filterClasses.has(x) ? 'md' : 'none'}
                  borderColor={filterClasses.has(x) ? 'pr.100' : 'transparent'}>
                  <ClassIconElement
                    id={x}
                    mt='4px'
                    opacity={filterClasses.has(x) ? 1 : 0.4}
                  />
                </Circle>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
      <Flex wrap='wrap' justify='center' mb={4}>
        {Tiers.slice(0, -1).map((x) => {
          return <TierItem key={x.id} data={x} />
        })}
      </Flex>
    </Flex>
  )
})

export default TierList
