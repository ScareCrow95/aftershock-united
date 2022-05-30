import {
  Flex,
  Image,
  Input,
  Text,
  Icon,
  Divider,
  useMediaQuery,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import HeadingContainer from '../../components/common/HeadingContainer'
import { _gems } from '../../constants/data/_gems'
import { useRootStore, useUIStore } from '../../provider/rootStoreProvider'
import { FaStar } from 'react-icons/fa'

export const Gem = observer(({ x }) => {
  const uiStore = useUIStore()

  // const
  return (
    <Flex
      direction='column'
      align='center'
      role='group'
      onMouseEnter={(e) => {
        uiStore.selectedGem = x.id
      }}
      onClick={() => {
        uiStore.isMobile && (uiStore.showGem = true)
      }}>
      <Flex
        py={4}
        borderWidth='2px'
        borderColor={uiStore.selectedGem === x.id ? 'cyan' : 'transparent'}
        boxShadow={uiStore.selectedGem === x.id ? 'inset 0 0 10px cyan' : '0'}
        _groupHover={{
          borderColor: 'cyan',
          boxShadow: 'inset 0 0 10px cyan',
        }}>
        <Image
          transform={uiStore.selectedGem === x.id ? 'scale(1.16)' : 'scale(1)'}
          _groupHover={{
            transform: 'scale(1.16)',
            transition: '100ms ease-in-out',
          }}
          src={`https://vc-static-server.nyc3.digitaloceanspaces.com/personal/gems/${x.id}.webp`}
          boxSize='130px'
          alt={x.id}
          objectFit='contain'
        />
      </Flex>
      <Text
        w='90px'
        mt={1}
        align='center'
        fontWeight='semibold'
        _groupHover={{ textShadow: '0 0 6px orange', color: 'pr.100' }}
        fontSize='sm'
        color='grey.300'>
        {x.name}
      </Text>
    </Flex>
  )
})

const index = observer(({ data }) => {
  const [selected, setSelected] = useState('')
  const uiStore = useUIStore()
  const rootStore = useRootStore()
  const gemData = rootStore.gems[uiStore.selectedGem]
  return (
    <Flex
      borderLeftWidth={[0, 0, 0, 0, '3px']}
      borderRightWidth={[0, 0, 0, 0, '3px']}
      borderLeftColor='pr.100'
      borderRightColor='pr.100'
      direction='column'
      boxShadow='dark-lg'
      flex={1}
      bg='sec.100'>
      <Flex>
        <Flex
          direction='column'
          overflowY='auto'
          h='calc(100vh - 120px)'
          css={uiStore.scrollCSS}>
          <Flex p={4} px={8} mt={2}>
            <Input
              placeholder='Search for Gem'
              value={selected}
              onChange={(e) => {
                setSelected(e.target.value)
              }}
            />
          </Flex>
          <HeadingContainer title='1 Star Legendary Gems' />
          <Flex wrap='wrap' px={4} justify='center'>
            {data
              .filter((x) => {
                if (selected) {
                  return (
                    x.rarity === 1 &&
                    x.name.toLowerCase().includes(selected.toLowerCase())
                  )
                } else {
                  return x.rarity === 1
                }
              })
              .map((x) => {
                return <Gem key={x.id} x={x} />
              })}
          </Flex>
          <HeadingContainer title='2 Star Legendary Gems' />
          <Flex wrap='wrap' px={4} justify='center'>
            {data
              .filter((x) => {
                if (selected) {
                  return (
                    x.rarity === 2 &&
                    x.name.toLowerCase().includes(selected.toLowerCase())
                  )
                } else {
                  return x.rarity === 2
                }
              })
              .map((x) => {
                return <Gem key={x.id} x={x} />
              })}
          </Flex>
          <HeadingContainer title='5 Star Legendary Gems' />
          <Flex wrap='wrap' px={4} mb={8} justify='center'>
            {data
              .filter((x) => {
                if (selected) {
                  return (
                    x.rarity === 5 &&
                    x.name.toLowerCase().includes(selected.toLowerCase())
                  )
                } else {
                  return x.rarity === 5
                }
              })
              .map((x) => {
                return <Gem key={x.id} x={x} />
              })}
          </Flex>
        </Flex>
        {!uiStore.isMobile && (
          <Flex shrink='0' w='440px' bg='sec.200' h='100%' shadow='dark-lg'>
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
        )}
      </Flex>
    </Flex>
  )
})

export default index

export async function getStaticProps(context) {
  /**
   * get Data later
   */
  const data = _gems
  console.log(data)
  return {
    props: {
      data,
    },
  }
}
