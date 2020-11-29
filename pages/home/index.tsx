import React, { useState } from 'react'
import Link from 'next/Link'
import App from '../../components/App'
import Card from '../../components/Card'
import Screen from '../../components/Screen'
import Turnover from '../../components/Turnover'
import { getSomeRandom } from '../../lib/utils'
import { usePoemsQuery } from '../../query'
function Home () {
    const [random, setRandom] = useState(false)
    const { data, loading } = usePoemsQuery()
    const poems = data?.poems
    const cardColor = ['#2352f6', '#4395f8', '#EA3862', '#333333', '#590DF4', '#f5be40', '#00aaa7', '#dc525d']
    const randomCard = () => {
        if (poems.length > 0) setRandom(!random)
        else return 
    }

    return (
        <App>
            <div id="home">
                <Screen />
                <div className="random column">
                    <div className="random-index">
                        <h5>Random</h5>
                        <button onClick={randomCard}>随机</button>
                    </div>
                    <div className="card-group">
                        {
                            loading ?
                            <>loading</> :
                            getSomeRandom(poems, cardColor.length).map( (poem, index) => (
                                <Link href={`/poem/${poem.id}?author=${poem.author}`} key={poem.id}>
                                    <a>
                                        <div>
                                            <Card bgColor={cardColor[index]} title={poem.title || '老虎的金黄'}  author={poem.author || '博尔赫斯'}  />
                                        </div>
                                    </a>
                                </Link>
                            ) )
                        }
                    </div>
                </div>
                <div className="jigsaw column">
                    <div>
                        <h5>
                            Turn over
                        </h5>
                    </div>
                    <div>
                        <Turnover />
                    </div>
                </div>
            </div>
        <style jsx>{`
            #home {
                margin: auto;
            }
            .column h5 {
                font-weight: 500;
                font-size: 28px;
                font-family: GT-Walsheim, "Neue Helvetica W02", "Helvetica Neue", Helvetica, Arial, sans-serif;
                margin-bottom: 25px;
                font-weight: 600;
                font-size: 28px;
                letter-spacing: -1px;
            }
            .random-index {
                display: flex;
                justify-content: space-between;
            }
            .card-group {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }
            .card-group div {
            
            }
        `}</style>
        </App>
    )
}

export default Home
