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
                <link rel="stylesheet" href="iconFont/iconfont.css"/>
                <script src="/iconFont/iconfont.js"></script>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        <style jsx>{`
            main {
                max-width: 1200px;
                margin: auto;
            }
        `}</style>
        </div>
    )
}

export default App