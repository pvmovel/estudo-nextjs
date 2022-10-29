import Head from 'next/head'
import Footer from '@components/footer'
import Header from '@components/header'
import Navigation from '@components/navigation'
import Image from 'next/image'

const SecondPost = () => (
  <>
    <Head>
      <title>SECOND POST :: BLOG</title>
      <meta property="og:title" content="SECOND POST :: BLOG" />
    </Head>
    <main>
      <Header />
      <Navigation />
      <article>
        <Image 
          src="/post/second-post/1036368.jpg"
          alt=""
          width={640}
          height={427}
        />
        <p>Photo by <a href="https://wwww.naosei.com">Não Sei da Silva</a> on Algum Canto.</p>
        <h1>Second Post!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam maxime itaque inventore eveniet aspernatur laborum nemo magnam maiores ex accusamus, minus at temporibus ipsa molestiae quos, similique vel iusto corrupti?</p>
      </article>
      <Footer />
    </main>
  </>
)

export default SecondPost