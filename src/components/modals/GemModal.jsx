import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Button,
  CloseButton,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useRootStore, useUIStore } from '../../provider/rootStoreProvider'
import { FaStar } from 'react-icons/fa'

const GemModal = observer(() => {
  const uiStore = useUIStore()
  const rootStore = useRootStore()
  const gemData = rootStore.gems[uiStore.selectedGem]
  return (
    <Modal isOpen={uiStore.showGem} onClose={() => (uiStore.showGem = false)}>
      <ModalOverlay bg='rgb(0,0,0,.8)' />
      <ModalContent>
        <ModalBody
          bg='sec.200'
          position='relative'
          overflow='hidden'
          rounded='lg'>
          <CloseButton
            position='absolute'
            right='8px'
            top='8px'
            size='lg'
            onClick={() => (uiStore.showGem = false)}
          />
          <Flex bg='sec.200' h='100%'>
            <Flex direction='column' flex={1}>
              <Image
                m={4}
                alignSelf='center'
                src={`https://vc-static-server.nyc3.digitaloceanspaces.com/personal/gems/${gemData.id}.webp`}
                w='120px'
                h='160px'
                shadow='dark-lg'
                alt={gemData.id}
                objectFit='contain'
              />
              <Flex
                p={4}
                py={4}
                mt={2}
                bg='rgb(0,0,0,.3)'
                align='center'
                shadow='dark-lg'>
                <Text fontWeight='bold' fontSize='lg' flex={1}>
                  {gemData.name}
                </Text>
                {Array.from(Array(gemData.rarity).keys()).map((x) => {
                  return <Icon as={FaStar} key={x} color='pr.100' mr={1} />
                })}
              </Flex>
              <Flex direction='column'>
                <Text p={6}>{gemData.desc}</Text>
                <Flex direction='column'>
                  <Flex p={4} py={2} bg='rgb(0,0,0,.3)' align='center'>
                    <Text color='blue.100' rounded='full' py='3px'>
                      Rank 1
                    </Text>
                  </Flex>
                  <Text color='grey.300' p={6} py={4}>
                    {gemData.rank1}
                  </Text>
                </Flex>
                <Flex direction='column' my={3}>
                  <Flex p={4} py={2} bg='rgb(0,0,0,.3)' align='center'>
                    <Text color='blue.100' rounded='full' py='3px'>
                      Rank 2
                    </Text>
                  </Flex>
                  <Text color='grey.300' p={6} py={4}>
                    {gemData.rank3}
                  </Text>
                </Flex>
                <Flex direction='column'>
                  <Flex p={4} py={2} bg='rgb(0,0,0,.3)' align='center'>
                    <Text color='blue.100' rounded='full' py='3px'>
                      Rank 3
                    </Text>
                  </Flex>
                  <Text fontSize='sm' color='grey.300' p={6} py={4}>
                    {gemData.rank5}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})

export default GemModal
