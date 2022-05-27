import { Flex, Image, Input, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import HeadingContainer from '../../components/common/HeadingContainer'
import { _gems } from '../../constants/data/_gems'
import { useUIStore } from '../../provider/rootStoreProvider'

export const Gem = observer(({ x }) => {
  const uiStore = useUIStore()
  return (
    <Flex
      direction='column'
      align='center'
      role='group'
      onMouseEnter={(e) => {
        uiStore.setPopover(e, x.id, 'gem', 0, 20)
      }}
      onMouseLeave={(e) => {
        uiStore.popover = null
      }}>
      <Flex
        py={4}
        borderWidth='2px'
        borderColor='transparent'
        _groupHover={{
          borderColor: 'cyan',
          boxShadow: 'inset 0 0 10px cyan',
        }}>
        <Image
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

  return (
    <Flex
      borderLeftWidth='3px'
      borderRightWidth='3px'
      borderLeftColor='pr.100'
      borderRightColor='pr.100'
      direction='column'
      boxShadow='dark-lg'
      flex={1}
      bg='sec.100'>
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
      <Flex wrap='wrap' px={4}>
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
      <HeadingContainer title='3 Star Legendary Gems' />
      <Flex wrap='wrap' px={4}>
        {data
          .filter((x) => {
            if (selected) {
              return (
                x.rarity === 3 &&
                x.name.toLowerCase().includes(selected.toLowerCase())
              )
            } else {
              return x.rarity === 3
            }
          })
          .map((x) => {
            return <Gem key={x.id} x={x} />
          })}
      </Flex>
      <HeadingContainer title='5 Star Legendary Gems' />
      <Flex wrap='wrap' px={4} mb={8}>
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
