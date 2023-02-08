import Head from 'next/head'
import Feed from '../components/Feed'
import Footer from '../components/Footer'
// import Image from 'next/image'
// import '../../styles/globals.css'

import Header from '../components/Header'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Online Test</title>
        <meta property="og:title" content="Demo Online Test" key="title" />
      </Head>
      <Header />
      <Feed />
      <Footer />
    </div>
  )
}
