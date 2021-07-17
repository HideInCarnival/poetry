import React from 'react'

function Turnover () {
    return (
        <div className="turnover">
            <div className="imgbox">
                <div className="front">
                    <img src="gypsy.jpeg" alt="jigsaw" className="main-img" />
                </div>
                <div className="back">
                    <a href="/about">
                        <div className="poem">
                            Under bare Ben Bulben's head<br/>
                            In Drumcliff churchyard Yeats is laid.<br/>
                            An ancestor was rector there<br/>
                            Long years ago, a church stands near,<br/>
                            By the road an ancient cross.<br/>
                            No marble, no conventional phrase;<br/>
                            On limestone quarried near the spot<br/>
                            By his command these words are cut:<br/>
                            Cast a cold eye<br/>
                            On life, On death<br/>
                            Horseman, pass by!
                        </div>
                        <img src="yeats.jpg" alt="yeats"/>
                    </a>
                </div>
            </div>
        <style jsx>{`
            .turnover {
                perspective: 1000px;
            }
            @keyframes turnover {
                from { transform: rotateY(0); }
                to { transform: rotateY(180deg); }
            }
            .imgbox {
                position: relative;
                width: 70%;
                transform-style: preserve-3d;
                margin: auto;
                height: 600px;
            }
            .imgbox > div {
                position: absolute;
            }
            .back {
                transform: translateZ(-1px) rotateY(180deg);
                width: 100%;
                background-color: #fff;
                
            }
            .back a {
                display: block;
                display: flex;
                justify-content: space-between;
            }
            .imgbox:hover {
                animation: turnover 2s linear 1;
                transform: rotateY(180deg);
            }
            .imgbox img.main-img {
                display: block;
                width: 100%;
                height: auto;
                margin: auto
            }
        `}</style>
        </div>
    )
}

export default Turnover