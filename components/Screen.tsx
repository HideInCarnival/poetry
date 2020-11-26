import React from 'react'

function Screen () {
    return (
        <div className="screen">
            <div className="text">
                <div>
                    <h1>
                        This craft of verse
                    </h1>
                </div>
                <div>
                    <p>
                        poetry is wisdom that enchants the heart,wisdom is poetry that sings in the mind.
                    </p>
                </div>
            </div>
        <style jsx>{`
            .screen {
                text-align: center;
                font-family: GT-Walsheim, "Neue Helvetica W02", "Helvetica Neue", Helvetica, Arial, sans-serif;
            }
            .text h1 {
                font-size: 80px;
                letter-spacing: -2px;
            }
            .text p {
                font-size: 28px;
                letter-spacing: -0.5px;
            }
        `}</style>
        </div>
    )
}

export default Screen