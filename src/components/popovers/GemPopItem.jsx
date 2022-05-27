import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Divider,
  Badge,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useRootStore, useUIStore } from '../../provider/rootStoreProvider'
import { ChakraNextImage } from '../common/ChakraNextImage'
import { ClassBG } from '../../assets/img/classbg/classBGAssets'
import { ClassIcons } from '../../assets/img/classIcon/classAssets'
import { FaStar } from 'react-icons/fa'

const GemPopItem = observer(() => {
  const uiStore = useUIStore()
  const rootStore = useRootStore()
  const gemData = rootStore.gems[uiStore?.popover?.id]
  return gemData ? (
    <Flex direction='column' flex={1}>
      <Flex p={4} py={2} mt={2} bg='rgb(0,0,0,.3)' align='center'>
        <Text fontWeight='bold' fontSize='lg' flex={1}>
          {gemData.name}
        </Text>
        {Array.from(Array(gemData.rarity).keys()).map((x) => {
          return <Icon as={FaStar} key={x} color='cyan' mr={1} />
        })}
      </Flex>
      <Flex direction='column' p={6}>
        <Text fontSize='sm'>{gemData.desc}</Text>
        <Divider my={4} />
        <Flex direction='column'>
          <Flex>
            <Text color='blue.100' fontSize='sm' rounded='full' py='3px'>
              Rank 1
            </Text>
          </Flex>
          <Text fontSize='sm' color='grey.300'>
            {gemData.rank1}
          </Text>
        </Flex>
        <Flex direction='column' my={3}>
          <Flex>
            <Text color='blue.100' fontSize='sm' rounded='full' py='3px'>
              Rank 3
            </Text>
          </Flex>
          <Text fontSize='sm' color='grey.300'>
            {gemData.rank3}
          </Text>
        </Flex>
        <Flex direction='column'>
          <Flex>
            <Text color='blue.100' fontSize='sm' rounded='full' py='3px'>
              Rank 5
            </Text>
          </Flex>
          <Text fontSize='sm' color='grey.300'>
            {gemData.rank5}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <></>
  )
})

export default GemPopItem
