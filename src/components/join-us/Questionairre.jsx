import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Input,
  Circle,
  Divider,
  Spacer,
  Icon,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useUIStore } from '../../provider/rootStoreProvider'
import caro1 from '../../assets/img/carousel/4.png'
import { ChakraNextImage } from '../common/ChakraNextImage'
import HeadingContainer from '../common/HeadingContainer'
import { Radio, RadioGroup, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { BsTwitch, BsDiscord, BsTwitter, BsFacebook } from 'react-icons/bs'
import { SiBattledotnet } from 'react-icons/si'
import ClassIconElement from '../common/ClassIconElement'

const Questionairre = observer(() => {
  const uiStore = useUIStore()
  return (
    <Flex direction='column'>
      <HeadingContainer title='Questionnaire' mt={8} />
      <Flex align='center' justify='center' direction='column'>
        <Text align='center' mt={4} color='grey.300'>
          Aftershock United Diablo Immortal Team Questionnaire | Message
          <Text
            as='span'
            mx={1}
            bg='pr.100'
            fontWeight='semibold'
            color='sec.300'
            px={1}
            py={1}
            rounded='md'>
            ChoseN#3140
          </Text>
          on Discord if you need any help!
        </Text>
        <Flex
          direction='column'
          p={8}
          w='700px'
          alignSelf='center'
          rounded='xl'
          px={16}
          mt={8}>
          <InputGroup>
            <InputLeftAddon>
              <Icon as={BsDiscord} boxSize={5} />
            </InputLeftAddon>
            <Input placeholder='Discord Name # Numbers' />
          </InputGroup>
          <InputGroup mt={4}>
            <InputLeftAddon>
              <Icon as={SiBattledotnet} boxSize={5} />
            </InputLeftAddon>
            <Input placeholder='Battle.Net Tag' />
          </InputGroup>
          <Divider my={4} />
          <Text bg='sec.200' rounded='lg' p={1} px={2}>
            Are you able to play on a US West server?
          </Text>
          <Flex direction='column'>
            <RadioGroup defaultValue='1' mt={2} colorScheme='orange'>
              <Radio my={1} value='1'>
                Yes
              </Radio>
              <Radio my={1} value='2'>
                No
              </Radio>
            </RadioGroup>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
})

export default Questionairre
