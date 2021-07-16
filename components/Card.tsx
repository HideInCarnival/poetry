import React from 'react'
import Stripe from './Stripe'

function Card ({bgColor="#fff", title, author, loading=true}) {
  return (
    <div className="card" style={{'backgroundColor': bgColor }}>
      <Stripe loading={loading}>
        <div>
          <h3 className="title">{title}</h3>
          <p className="author">{author}</p>
        </div>
      </Stripe>
    <style jsx>{`
      .card {
        position: relative;
        border-radius: 12px;
        background-color: rgb(255, 255, 255);
        box-shadow: var(--fraction-shadow-button,0px 1px 2px 0px rgba(0,0,0,0.1),0px 2px 10px 0px rgba(0,0,0,0.08));
        transition: all 0.25s ease 0s;
        width: 260px;
        min-height: 82px;
        margin: 10px 10px;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: none;
        -ms-overflow-style: none;
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
        font-weight: 500;
      }
      h3.title {
        padding: 0px;
        margin: 15px 0 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        width: 100%;
      }
      p.author {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 13px;
      }
    `}</style>
    </div>
  )
}

export default Card