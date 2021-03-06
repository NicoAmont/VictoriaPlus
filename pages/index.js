import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/landing/Footer'
import HeroSection from '../components/landing/HeroSection'
import Navbar from '../components/landing/Navbar'

export default function Home() {
  return (
    <div className="" >
      <Head>
        <title>Victoria Plus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="relative bg-white w-screen h-full ">
       
        <Navbar />
        <HeroSection />
      </main>

      <Footer />
    </div>
  )
}


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})
