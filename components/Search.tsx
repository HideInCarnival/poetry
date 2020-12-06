import React, { useState } from 'react'
import { usePoemLikeQuery, usePoetLikeQuery } from '../query'
import Link from 'next/Link'
import { debounce } from '../lib/utils'

function Search() {
  const [searchKey, setSearchKey] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const poemSearchBack = usePoemLikeQuery({
    variables: {
      title: searchKey
    }
  })
  const poetSearchBack = usePoetLikeQuery({
    variables: {
      name: searchKey
    }
  })

  function searchByKey(e: React.FormEvent<HTMLInputElement>): void {
    const element = e.target as HTMLInputElement
    const value = element.value
    setSearchKey(value)
  }
  return (
    <div id="search">
      <div id="search-box">
        <input type="search" placeholder="Search..." autoComplete="off" onInput={(e) => {debounce(searchByKey, 700)(e)}} onFocus={() => {setIsFocus(true)}} onBlur={() => {setIsFocus(false)}} />
        <span className="icon-search">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg>
        </span>
      </div>
      <div id="search-result">
        <ul>
          {
            !searchKey || poemSearchBack.loading || poetSearchBack.loading ?
            null
            :
            [...poemSearchBack.data.poemLike, ...poetSearchBack.data.poetLike].map((item, index) => {
              return item.author ? (
                <Link href={`/poem/${item.id}`} key={index}>
                  <a>
                    <li>
                      <div>{item.title}</div>
                      <span>{item.author}</span>
                    </li>
                  </a>
                </Link>
              ) : (
                <Link href={`/poet/${item.id}`} key={index}>
                  <a>
                    <li>
                      <div>{item.name}</div>
                      <span>{item.nationality}</span>
                    </li>
                  </a>
                </Link>
              )
            })
          }
        </ul>
      </div>
    <style jsx>{`
        #search {
          position: relative;
        }
        #search-box {
          display: flex;
          align-items: center;
          width: 180px;
          font-size: 16px;
          position: relative;
        }
        .icon-search {
          position: absolute;
          top: 8px;
          left: 2px;
        }
        .icon-search:before {
          content: '';
        }
        .icon-search svg {
          width: 25px;
          height: 25px;
        }
        #search-box input {
          height: 40px;
          width: 100%;
          cursor: text;
          border: 0;
          transition: 150ms;
          outline: none;
          font-family: expo-brand-book,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
          color: rgba(0, 0, 32, 0.8);
          font-weight: 500;
          font-size: 16px;
          background: #f5f5f5;
          padding: 2px 30px;
          border-radius: 80px;
          -webkit-appearance: none;
        }
        #search-box input:hover {
          background: #e5e5e5;
        }
        #search-result {
          width: 300px;
          position: absolute;
          left: 0;
          top: 50px;
        }
        #search-result ul {
          margin: 0;
          padding: 0;
          max-height: 200px;
          overflow-y: auto;
          list-style: none;
          background: rgba(255, 255, 255, 0.95);
          padding: 15px 8px;
          border: 1px solid #f5f5f5;
          border-top: none;
          border-radius: 10px;
        }
        #search-result ul li {
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          padding: 10px;
        }
        #search-result ul li:hover {
          background: #f5f5f5;
        }
        #search-result ul li span {
          color: #09f;
          font-size: 14px;
          font-weight: 400;
        }
      `}</style>
    </div>

  )
}

export default Search