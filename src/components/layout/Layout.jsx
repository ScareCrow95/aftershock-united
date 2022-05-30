import { ChakraProvider, Flex } from '@chakra-ui/react'
import '@fontsource/raleway/100.css'
import '@fontsource/raleway/200.css'
import '@fontsource/raleway/300.css'
import { observer } from 'mobx-react-lite'
import { useUIStore } from '../../provider/rootStoreProvider'
import { darkTheme } from '../../theme/dark'
import { lightTheme } from '../../theme/light'
/* #region  Font Weights */
import '@fontsource/raleway/400.css'
import '@fontsource/raleway/500.css'
import '@fontsource/raleway/600.css'
import '@fontsource/raleway/700.css'
import '@fontsource/raleway/800.css'
import '@fontsource/raleway/900.css'
import { useEffect } from 'react'
import Header from './Header'
import NavigationMenu from './NavigationMenu'
import GemModal from '../modals/GemModal'
const Layout = observer(({ children }) => {
  const uiStore = useUIStore()
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) uiStore.isMobile = true
      else uiStore.isMobile = false
    })
  }, [])
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
        {uiStore.isMobile && <GemModal />}
      </Flex>
    </ChakraProvider>
  )
})

export default Layout
