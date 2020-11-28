import React from 'react'
import App from '../../components/App'

function Poem () {
    return (
        <App>
            <div id="poem">
                <div className="left-nav">
                    <nav>
                        <div className="column">叶芝的其他诗歌</div>
                        <div className="nav-item">
                            <div>
                                <a href="">本布尔山下</a>
                            </div>
                            <div>
                                <a href="">本布尔山下</a>
                            </div>
                            <div>
                                <a href="">本布尔山下</a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="poem-body">
                    <div className="center">
                        <h3>本布尔山下</h3>
                        <div className="author">
                            <a href="">
                                Yeats
                            </a>
                        </div>
                    </div>
                    <div className="main-text">
                        此刻，他们疾驶在冬日的黎明，<br/>
                        本布尔本山是他们身后的景致。<br/>
                        这些，是他们想说的要旨。
                    </div>
                </div>
            </div>
        <style jsx>{`
            #poem {
                display: flex;
            }
            .left-nav {
                max-width: 200px;
                overflow: hidden;
            }
            .left-nav nav {
                width: 200px;
                padding: 20px 20px;
            }
            nav .column {
                font-weight: 600;
                color: rgba(0, 0, 21, 0.9);
                margin-bottom: 12px;
            }
            nav .nav-item > div{
                margin-bottom: 12px;
            }
            nav .nav-item a {
                font-weight: 300;
                font-size: 15px;
                width: 100%;
                padding-left: 16px;
            }

            nav .nav-item a:hover {
                color: #4630eb;
            }
            .poem-body {
                padding-left: 60px;
                max-width: 800px;
            }
            .poem-body h3 {
                font-size: 18px;
                font-weight: 600;
                color: #3b3b54;
            }
            .author {
                margin-bottom: 20px;
                color: #09f;
            }
            .main-text {
                color: #3b3b54;
                font-weight: 600;
                line-height: 1.5;
            }
            .center {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: auto;
            }
        `}</style>    
        </App>
    )
}


export default Poem