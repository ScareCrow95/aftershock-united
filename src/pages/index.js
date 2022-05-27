import { Flex, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { HomeCarousel } from '../components/home/HomeCarousel'
import Activity from '../components/home/Activity'
import { useUIStore } from '../provider/rootStoreProvider'
import Trending from '../components/home/Trending'
import { _homeData } from '../constants/data/_home'
import TierList from '../components/home/TierList'

export default observer(() => {
  return (
    <Flex
      direction='column'
      borderLeftWidth='3px'
      borderRightWidth='3px'
      borderLeftColor='pr.100'
      borderRightColor='pr.100'
      boxShadow='dark-lg'
      bg='sec.100'>
      <HomeCarousel />
      <TierList />
      <Activity />
      <Trending />
    </Flex>
  )
})

export async function getStaticProps(context) {
  /**
   * get Data later
   */
  const data = _homeData

  return {
    props: {
      hydrationData: { homeStore: data },
    },
  }
}
