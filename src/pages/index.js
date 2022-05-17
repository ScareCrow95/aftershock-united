import { Flex, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { HomeCarousel } from '../components/home/HomeCarousel'
import Activity from '../components/home/Activity'
import { useUIStore } from '../provider/rootStoreProvider'
import Trending from '../components/home/Trending'

export default observer(() => {
  const uiStore = useUIStore()
  return (
    <Flex
      borderLeftWidth='3px'
      borderLeftColor='pr.100'
      bg='sec.100'
      direction='column'
      w='1400px'
      overflowY='auto'
      maxH='calc(100vh - 120px)'
      boxShadow='dark-lg'
      css={uiStore.scrollCSS}>
      <Flex direction='column'>
        <HomeCarousel />
        <Activity />
        <Trending />
      </Flex>
    </Flex>
  )
})

export async function getServerSideProps(context) {
  return {
    props: {
      hydrationData: { ui: 2 },
    },
  }
}
