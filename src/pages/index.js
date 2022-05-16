import { observer } from 'mobx-react-lite'
import { useUIStore } from '../provider/rootStoreProvider'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { darkTheme } from '../theme/dark'
import { lightTheme } from '../theme/light'

export default observer(() => {
  const store = useUIStore()
  return (
    <ChakraProvider theme={store.theme === 'light' ? darkTheme : lightTheme}>
      <Flex
        style={{ cursor: 'pointer' }}
        onClick={() => {
          store.counter = store.counter + 1
        }}>
        hello {store.counter}
      </Flex>
    </ChakraProvider>
  )
})

export async function getServerSideProps(context) {
  return {
    props: {
      hydrationData: { ui: 2 },
    },
  }
}
