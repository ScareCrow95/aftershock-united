import { Box } from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'

export const ChakraNextImage = (props) => {
  const { src, alt, objectFit, ...rest } = props
  console.log(objectFit)
  return (
    <Box position='relative' {...rest}>
      <NextImage
        objectFit={objectFit || 'cover'}
        layout='fill'
        src={src}
        alt={alt}
      />
    </Box>
  )
}
