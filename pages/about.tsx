import Head from 'next/head'
import Header from '@components/header'
import Navigation from '@components/navigation'
import Section from '@components/section'
import Footer from '@components/footer'

export default function About () {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Navigation />
        <Section content='About Page' />
        <Footer />
      </main>
    </>
  )
}