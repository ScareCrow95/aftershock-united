import { Box } from '@chakra-ui/react'
import * as React from 'react'
import NextImage from 'next/image'

export const ChakraNextImage = (props) => {
  const { src, alt, objectFit, objectPosition, ...rest } = props
  return (
    <Box position='relative' {...rest}>
      <NextImage
        objectFit={objectFit || 'cover'}
        objectPosition={objectPosition || 'none'}
        layout='fill'
        src={src}
        alt={alt}
        style={{ filter: props.filter }}
      />
    </Box>
  )
}
