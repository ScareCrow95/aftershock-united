import Layout from '../components/layout/Layout'
import { RootStoreProvider } from '../provider/rootStoreProvider'
import PopoverBG from '../components/popovers/PopoverBG'

function MyApp({ Component, pageProps }) {
  return (
    <RootStoreProvider hydrationData={pageProps.hydrationData}>
      <Layout>
        <Component {...pageProps} />
        <PopoverBG />
      </Layout>
    </RootStoreProvider>
  )
}

export default MyApp
