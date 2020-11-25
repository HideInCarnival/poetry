import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const App = function ({children}) {
    return (
        <div>
            <Head>
                <title>外国诗歌精选</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default App