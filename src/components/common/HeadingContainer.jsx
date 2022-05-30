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
  Divider,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

const HeadingContainer = observer((props) => {
  return (
    <Flex direction='column' {...props}>
      <Flex bg='sec.200' h='1px' my={1} />
      <Flex
        bg='linear-gradient(90deg,transparent,rgb(0,0,0,.5),transparent)'
        position='relative'
        align='center'
        justify='center'>
        <Text fontSize='2xl' fontWeight='bold' p={4} color='grey.200'>
          {props.title.toUpperCase()}
        </Text>
        <Flex position='absolute' right={8}>
          {props.children}
        </Flex>
      </Flex>
      <Flex bg='sec.200' h='1px' my={1} />
    </Flex>
  )
})

export default HeadingContainer
