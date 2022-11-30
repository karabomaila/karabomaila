import '../styles/globals.css'
import Layout from '../components/layout'
import Footer from '../components/footer'  
import Navbar from '../components/navBar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/*navigation links for the menue */}
        <Navbar />
      {/* a layout for the page */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </div>
  )
}

export default MyApp
