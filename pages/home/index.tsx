import React from 'react'
import App from '../../components/App'
import Card from '../../components/Card'
import Screen from '../../components/Screen'
import Turnover from '../../components/Turnover'
function Home () {
    return (
        <App>
            <div id="home">
                <Screen />
                <div className="random column">
                    <div className="random-index">
                        <h5>Random</h5>
                        <button>随机</button>
                    </div>
                    <div className="card-group">
                        <div>
                            <Card bgColor="#2352f6" />
                        </div>
                        <div>
                            <Card bgColor="#4395f8" />
                        </div>
                        <div>
                            <Card bgColor="#EA3862" />
                        </div>
                        <div>
                            <Card bgColor="#333333" />
                        </div>
                        <div>
                            <Card bgColor="#590DF4" />
                        </div>
                        <div>
                            <Card bgColor="#f5be40" />
                        </div>
                        <div>
                            <Card bgColor="#00aaa7" />
                        </div>
                        <div>
                            <Card bgColor="#dc525d" />
                        </div>
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
