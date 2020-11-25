import React from 'react'
import App from '../../components/App'
import Card from '../../components/Card'
function Home () {
    return (
        <App>
            <div id="home">
                <div className="random">
                    <h5>Random</h5>
                    <div className="card-group">
                        <Card />
                    </div>
                </div>
            </div>
        <style jsx>{`
            #home {
                padding: 0 16px;
            }
            .random h5 {
                font-weight: 500;
                font-size: 28px;
                font-family: GT-Walsheim, "Neue Helvetica W02", "Helvetica Neue", Helvetica, Arial, sans-serif;
                margin-bottom: 15px;
            }
        `}</style>
        </App>
    )
}

export default Home
