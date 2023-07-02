import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import HeroSection from '@/components/heroSection'
import NavBar from '@/components/navBar'
import SideMenu from '@/components/sideMenu'
import Product from './product'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Store</title>
        <meta name="description" content="Shawarma Home Delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>




      <HeroSection />
      <Product />


    </>
  )
}
