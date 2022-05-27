import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Avatar,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { User } from '../../store/classes/User'

const BlogWriter = observer(({ data }) => {
  /**
   * @type {User}
   */
  const user = data
  return (
    <Flex align='center'>
      <Avatar src={user.avatar} p='2px' bg='sec.100' size='sm'></Avatar>
      <Text ml={2} fontWeight='semibold'>
        {user.name}
      </Text>
    </Flex>
  )
})

export default BlogWriter
