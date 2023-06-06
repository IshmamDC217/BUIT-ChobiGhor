import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Homepage from '@/components/Homepage' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>BUIT Family</title>
        <link rel="icon" href="/" />

      </Head>

      <header>
        <Navigation/>
      </header>

      <main>
        <Homepage/>
      </main>

    </div>
  )
}