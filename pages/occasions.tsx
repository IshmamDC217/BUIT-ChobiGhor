import Head from 'next/head'
import Navigation from "../components/Navigation"
import Homepage2 from '@/components/Homepage2'


export default function WorkPage() {

    return (
        <div>
            <Head>
                <meta name="description" content="Work page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <Navigation />
            </header>

            <main>
                <Homepage2 />
            </main>
        </div>
    )
}