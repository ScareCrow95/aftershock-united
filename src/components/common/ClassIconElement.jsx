import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useUIStore } from '../../provider/rootStoreProvider'
import NextImage from 'next/image'
import { ClassIcons } from '../../assets/img/classIcon/classAssets'

const ClassIconElement = observer((props) => {
  const uiStore = useUIStore()
  return (
    <Box
      as='span'
      verticalAlign='middle'
      _hover={{ opacity: 0.4 }}
      onMouseEnter={(e) => {
        uiStore.setPopover(e, props.id)
      }}
      onMouseLeave={(e) => {
        uiStore.popover = null
      }}
      {...props}>
      <NextImage src={ClassIcons[props.id]} width='30px' height='30px' />
    </Box>
  )
})

export default ClassIconElement
