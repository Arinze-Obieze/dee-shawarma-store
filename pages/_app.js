import Footer from '@/components/footer'
import NavBar from '@/components/navBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <> <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </>
}
