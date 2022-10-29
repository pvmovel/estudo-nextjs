import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/header'
import Navigation from '@components/navigation'
import Section from '@components/section'
import Footer from '@components/footer'
import { getPostList } from '@shared/util'

type PostList = string[]

function Home({ posts }:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Estudo NextJS</title>
        <meta name="description" content="Estudo de NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <Navigation />
        
        <Section content='Home Page' />

        {posts.length > 0 && (
          <ul>
            {posts.map((slug) => (
              <li key={slug}>
                <Link legacyBehavior href={`post/${slug}`}>
                  <a>
                    {slug.replace(/-/g, ' ')}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <Footer />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const posts:PostList = getPostList()

  return {
    props: {
      posts
    }
  }
}

export default Home;