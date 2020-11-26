import React from 'react'

function Card ({bgColor="#fff"}) {
  return (
    <a href="#">
      <div className="card" style={{'backgroundColor': bgColor }}>
        <div>
          <h3 className="title">老虎的金黄</h3>
          <p className="author">博尔赫斯</p>
          {/* <div className="article">
          我一次又一次地观看<br/>
          那只英武的孟加拉虎<br/>
          直到金黄色的傍晚，<br/>
          瞧它在铁栅栏里面<br/>
          循着注定的途径巡逡往返，<br/>
          从没想到那就是它的笼樊。<br/>
          以后还有别的金黄颜色，<br/>
          那是宙斯美妙的金属，<br/>
          变成九个指环，每个又变九个，<br/>
          永远没了没完。<br/>
          着年岁的流逝，<br/>
          别的绚丽色彩逐渐把我抛弃，<br/>
          如今只给我留下<br/>
          朦胧的光亮、难测的阴影<br/>
          和原始的金黄。<br/>
          啊，西下的夕阳；啊，老虎，<br/>
          神话和史诗里的闪光，<br/>
          啊，还有那更可爱的金黄，你的头发，<br/>
          我的手渴望把它抚摸。<br/>
          </div> */}
        </div>
      </div>
    <style jsx>{`
      a {
        display: inline-block;
      }
      .card {
        position: relative;
        border-radius: 12px;
        background-color: rgb(255, 255, 255);
        box-shadow: var(--fraction-shadow-button,0px 1px 2px 0px rgba(0,0,0,0.1),0px 2px 10px 0px rgba(0,0,0,0.08));
        transition: all 0.25s ease 0s;
        width: 260px;
        // height: 400px;
        margin: 10px 10px;
        padding: 0px 20px;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: none;
        -ms-overflow-style: none;
        // background-color: #EA3862;
        color: #fff;
        text-align: center;
      }
      .card::-webkit-scrollbar {
        display: none;
      }
      .card:hover {
        transform: translateY(-8px);
      }
      .article {
        white-space: pre-line;
        font-size: 15px;
        // color: #333;
        font-weight: 500;
      }
      h3.title {
        padding: 0px;
        margin: 15px 0 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        // color: rgb(51, 51, 51);
        width: 100%;
      }
      p.author {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 13px;
        // color: rgb(170, 170, 170);
      }
    `}</style>
    </a>
  )
}

export default Card