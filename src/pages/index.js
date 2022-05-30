import { Box, Flex, Text } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import Activity from '../components/home/Activity'
import { HomeCarousel } from '../components/home/HomeCarousel'
import Trending from '../components/home/Trending'
import OverallRanking from '../components/tier/OverallRanking'
import { _homeData } from '../constants/data/_home'

export default observer(() => {
  return (
    <Flex
      direction='column'
      borderLeftWidth={[0, 0, 0, 0, '3px']}
      borderRightWidth={[0, 0, 0, 0, '3px']}
      borderLeftColor='pr.100'
      borderRightColor='pr.100'
      boxShadow='dark-lg'
      bg='sec.100'>
      <HomeCarousel />
      <OverallRanking desc />
      <Box mt={5} />
      <Trending />
      <Activity />
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
