import React from 'react'


function Stripe({ loading, children }) {
  return (
    <div className="stripe">
      {
        loading ?
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          :
          children
      }
      <style jsx>{`
        .stripe {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        .lines {
            margin: 24px 0 20px;
        }
        .line {
            background: linear-gradient(90deg, #f2f2f2 25%, #b3b3b3 37%, #f2f2f2 63%);
            background-size: 400% 100%;
            height: 16px;
            width: 100%;
            margin-top: 15px;
            // background-position: 100% 50%;
            animation: loading 1.4s ease infinite;
        }
        @keyframes loading {
          0% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0 50%;
          }
        }
      `}</style>
    </div>
  )
}



export default Stripe