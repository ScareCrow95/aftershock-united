import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'

const SocialIcon = (props) => {
  return (
    <Icon
      as={props.icon}
      _hover={{ color: props.hover }}
      cursor='pointer'
      {...props}
    />
  )
}

export default SocialIcon
