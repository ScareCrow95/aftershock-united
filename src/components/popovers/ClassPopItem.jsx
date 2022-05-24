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
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useUIStore } from '../../provider/rootStoreProvider'
import { ChakraNextImage } from '../common/ChakraNextImage'
import { ClassBG } from '../../assets/img/classbg/classBGAssets'
import { ClassIcons } from '../../assets/img/classIcon/classAssets'
import { FaStar } from 'react-icons/fa'

const ClassPopItem = observer(() => {
  const uiStore = useUIStore()
  return uiStore?.popover?.id ? (
    <Flex direction='column'>
      <ChakraNextImage
        src={ClassBG[uiStore?.popover?.id]}
        w='100%'
        h='100px'
        objectFit='cover'
        boxShadow='base'
      />
      <Flex p={4} py={2} mt={2} bg='rgb(0,0,0,.3)'>
        <Text fontWeight='bold' fontSize='lg' flex={1}>
          {uiStore.popover.id.toUpperCase()}
        </Text>

        <ChakraNextImage
          src={ClassIcons[uiStore?.popover?.id]}
          boxSize={7}
          objectFit='cover'
          boxShadow='base'
        />
      </Flex>
      <Flex direction='column' p={6}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed
          viverra tellus in hac habitasse. Nisl pretium fusce id velit. Eu
          facilisis sed odio morbi.
        </Text>
        <Divider my={4} />
        <Text fontSize='lg'>
          Level:{' '}
          <Text as='span' color='green.100' fontWeight='bold'>
            32
          </Text>
        </Text>
        <Flex align='center' mt={2}>
          <Text fontSize='lg' mr={2}>
            Difficulty:
          </Text>
          <Icon as={FaStar} boxSize={4} mr={2} color='pr.100' />
          <Icon as={FaStar} boxSize={4} mr={2} color='pr.100' />
          <Icon as={FaStar} boxSize={4} mr={2} color='pr.100' />
        </Flex>
        <Divider my={4} />
        <Text fontSize='sm' color='grey.300'>
          Diam vulputate ut pharetra sit amet aliquam. Morbi blandit cursus
          risus at ultrices mi tempus imperdiet nulla. Arcu bibendum at varius
          vel pharetra. Ultrices gravida dictum fusce ut. Ipsum dolor sit amet
          consectetur.
        </Text>
      </Flex>
    </Flex>
  ) : (
    <></>
  )
})

export default ClassPopItem
