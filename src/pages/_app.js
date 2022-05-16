import Layout from '../components/layout/Layout'
import { RootStoreProvider } from '../provider/rootStoreProvider'

function MyApp({ Component, pageProps }) {
  return (
    <RootStoreProvider hydrationData={pageProps.hydrationData}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootStoreProvider>
  )
}

export default MyApp
