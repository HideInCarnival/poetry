import React from 'react'
import App from '../../components/App'


function  Poet () {
  return (
    <App>
      <div id="poet">
        <div className="title">
          <h1>William Butler Yeats</h1>
        </div>
        <div className="intro">
          <p>
            威廉·巴特勒·叶芝（1865年6月13日~1939年1月28日），亦译“叶慈”、“耶茨”，爱尔兰诗人、剧作家和散文家，著名的神秘主义者，是“爱尔兰文艺复兴运动”的领袖，也是艾比剧院（Abbey Theatre）的创建者之一。叶芝的诗受浪漫主义、唯美主义、神秘主义、象征主义和玄学诗的影响，演变出其独特的风格。叶芝的艺术代表着英语诗从传统到现代过渡的缩影。叶芝早年的创作具有浪漫主义的华丽风格，善于营造梦幻般的氛围，在1893年出版的散文集《凯尔特的薄暮》，便属于此风格。然而进入不惑之年后，在现代主义诗人艾兹拉·庞德等人的影响下，尤其是在其本人参与爱尔兰民族主义政治运动的切身经验的影响下，叶芝的创作风格发生了比较激烈的变化，更加趋近现代主义了。
          </p>
        </div>
        <div className="works">
          <h1>Works</h1>
          <div className="work-list">
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
            <div>
              <a href="">
                哈哈哈
              </a>
            </div>
          </div>
        </div>
      </div>
    <style jsx>{`
      .poet h1 {
        fot-size: 80px;
        letter-spqcing: -2px;
        font-family: SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;
      }
      .intro p, .work-list {
        max-width: 800px;
        font-size: 20px;
        letter-spacing: -0.5px;
        font-weight: 300;
        padding-left: 20px;
      }
      .work-list {
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
      }
      .work-list > div {
        width: 100px;
        display: flex;
        align-items: center;
        margin-right: 15px;
        margin-bottom: 8px;
      }
      .work-list a {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .work-list a:hover {
        color: #4630eb;
      }
    `}</style>
    </App>
  )
}

export default Poet