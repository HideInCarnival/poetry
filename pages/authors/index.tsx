import React from 'react'
import App from '../../components/App'


function Authors () {
  return (
    <App>
      <div id="authors">
        <div className="left-nav">
          <nav>
            <div>
              <div className="first-nav">
                <a href="">All</a>
              </div>
              <div className="first-nav">
                <a href="">
                  Countries
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>
              </div>
              <div className="second-list">
                <div className="second-nav">
                  <a href="">阿根廷</a>
                </div>
                <div className="second-nav">
                  <a href="">美国</a>
                </div>
                <div className="second-nav">
                  <a href="">意大利</a>
                </div>
                <div className="second-nav">
                  <a href="">阿拉伯</a>
                </div>
                <div className="second-nav">
                  <a href="">俄罗斯</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="author-table">
          <div className="author-list">
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            <div className="name">
              <a href="">111</a>
            </div>
            
          </div>
        </div>
      </div>
    <style jsx>{`
      #authors {
        display: flex;
      }
      .left-nav {
        max-width: 280px;
        overflow: hidden;
      }
      .left-nav nav {
        width: 200px;
        padding: 20px 20px;
      }
      .first-nav a {
        font-weight: 500;
        color: rgba(0, 0, 32, 0.9);
        font-size: 15px;
        display: flex;
        align-items: center;
        font-family: expo-brand-demi;
        justify-content: space-between;
      }
      .first-nav {
        padding: 8px 16px;
        border-radius: 4px;
        margin-bottom: 12px;
      }
      .first-nav:hover {
        background: #EBEBED;
      }
      .rotate-up {
        transform: rotate(180deg);
      }
      .second-list {
        padding-left: 16px;
      }
      .second-nav {
        margin-bottom: 12px;
        display: flex;
      }
      .second-nav:hover {
        color: #4630eb;
      }
      .second-nav a {
        font-family: expo-brand-book;
        font-weight: 300;
        font-size: 15px;
        width: 100%;
      }
      .author-table {
        padding: 20px 24px;
        max-width: 800px;
      }
      .author-list {
        font-family: expo-brand-book;
        font-weight: 300;
        font-size: 15px;
        display: flex;
        flex-wrap: wrap;
      }
      .name {
        display: flex;
        align-items: center;
        width: 80px;
        margin-bottom: 8px;
        margin-right: 4px;
      }
      .name a {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name a:hover {
        color: #4630eb;
      }
    `}</style>
    </App>
  )
}

export default Authors