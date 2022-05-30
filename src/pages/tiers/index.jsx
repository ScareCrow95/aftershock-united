import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import TierList from '../../components/tier/TierList'
import { _homeData } from '../../constants/data/_home'
import OverallRanking from '../../components/tier/OverallRanking'

const index = observer(() => {
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
      <OverallRanking />
      <TierList />
    </Flex>
  )
})

export default index

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
