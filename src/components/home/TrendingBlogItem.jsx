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
import { Blog } from '../../store/classes/Blog'
import { ChakraNextImage } from '../common/ChakraNextImage'
import { truncateString } from '../../constants/utils'
import BlogWriter from '../common/BlogWriter'

import { useRouter } from 'next/router'

const TrendingBlogItem = observer(({ data }) => {
  const router = useRouter()

  /**
   * @type {Blog}
   */
  const blog = data
  return (
    <Flex
      role='group'
      w='350px'
      bg='sec.200'
      m={4}
      direction='column'
      borderWidth='2px'
      borderColor='transparent'
      onClick={() => {
        router.push(`/blog/${blog._id}`)
      }}
      cursor='pointer'
      _hover={{
        transform: 'scale(1.04)',
        transition: '200ms ease-in-out',
        borderColor: 'pr.100',
        boxShadow: 'dark-lg',
      }}>
      {data.thumbnail && (
        <Image
          alt='thumb'
          src={blog.thumbnail}
          w='100%'
          h='100px'
          objectFit='cover'
          _groupHover={{ filter: 'grayscale(100%)' }}
        />
      )}
      <Flex direction='column' p={4} flex={1}>
        <Text
          fontWeight='semibold'
          fontSize='lg'
          _groupHover={{ color: 'pr.100' }}>
          {blog.title}
        </Text>
        <Divider my={3} />
        {blog.subtitle && (
          <Text fontSize='sm' color='grey.200'>
            {blog?.subtitle}
          </Text>
        )}
        <Text color='grey.300' mt={2}>
          {truncateString(blog?.description, 200)}
        </Text>
        <Spacer />
        <Divider my={3} />
        <Flex align='center'>
          <BlogWriter data={blog.createdBy} />
          <Spacer />
          <Text fontSize='sm'>
            {new Date(blog.createdOn).toLocaleDateString()}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
})

export default TrendingBlogItem
