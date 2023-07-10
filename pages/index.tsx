import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Homepage from '@/components/Homepage' 
import Homepage2 from '@/components/Homepage2' 

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
        <Homepage2/>
      </main>

    </div>
  )
}
