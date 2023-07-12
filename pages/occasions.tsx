import Head from 'next/head'
import Navigation from "../components/Navigation"
import Occasions from '@/components/Occasions'


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
                <Occasions />
            </main>
        </div>
    )
}