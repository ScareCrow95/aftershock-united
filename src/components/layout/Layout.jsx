import { ChakraProvider, Flex } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useUIStore } from '../../provider/rootStoreProvider'
import { darkTheme } from '../../theme/dark'
import { lightTheme } from '../../theme/light'
import '@fontsource/raleway/100.css'
import '@fontsource/raleway/200.css'
import '@fontsource/raleway/300.css'
/* #region  Font Weights */
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/600.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/800.css'
import '@fontsource/raleway/900.css'
import Header from './Header'
import NavigationMenu from './NavigationMenu'
import { ChakraNextImage } from '../common/ChakraNextImage'
import bg from '../../assets/img/bgPattern.png'
const Layout = observer(({ children }) => {
  const uiStore = useUIStore()

  return (
    <ChakraProvider theme={uiStore.theme === 'dark' ? darkTheme : lightTheme}>
      <Flex direction='column' h='100vh' position='relative'>
        <Header />
        <NavigationMenu />
        <Flex
          bg='sec.150'
          justify='center'
          background={`url('/bg.png')`}
          backgroundSize='256px'
          backgroundRepeat='repeat'>
          <Flex
            maxH='calc(100vh - 120px)'
            minH='calc(100vh - 120px)'
            overflowY='auto'
            justify='center'
            overflowX='hidden'
            w='100%'
            css={uiStore.scrollCSS}>
            <Flex direction='column' w='1400px'>
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
})

export default Layout
