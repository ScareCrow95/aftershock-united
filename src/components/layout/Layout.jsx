import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import Header from './Header'

const Layout = observer(({ children }) => {
  return (
    <Flex direction='column'>
      <Header />
      <Flex>{children}</Flex>
    </Flex>
  )
})

export default Layout
