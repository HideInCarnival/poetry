import React from 'react'
import { removeRepetition } from '../lib/utils'
import { useAuthorsQuery } from '../query'
import { useRouter } from 'next/router'
import Link from 'next/Link'


function AuthorNav () {
  const router = useRouter()
  const { query } = router
  const {loading, data} = useAuthorsQuery()
  console.log(useAuthorsQuery());
  const poets = data?.poets
  return (
    <div className="left-nav">
      <nav>
        <div>
          <div className={`first-nav ${query.nation == 'all' ? 'active' : ''}`}>
            <Link href={`/authors/all?page=${query.page || 1}`}>
              <a>All</a>
            </Link>
          </div>
          <div className="first-nav">
            <a href="">
              Countries
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
          <div className="second-list">
            {
              !loading ? 
              removeRepetition(poets).map((item, index)=> (
                <div className={`second-nav ${query.nation === item ? 'country-active' : ''}`} key={index}>
                  <Link href={`/authors/${item}?page=1`}>
                    <a>{ item }</a>
                  </Link>
                </div>
              ))
              :
              <>loading</> 
            }
          </div>
        </div>
      </nav>
    <style jsx>{`
      .left-nav {
        max-width: 200px;
        overflow: hidden;
        height: calc(100vh - 60px);
        overflow-y: auto;
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
      .first-nav.active {
        background-color: #EBEBED;
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
      .second-nav.country-active a {
        color: #4630eb;
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
    `}</style> 
    </div>
  )
}


export default AuthorNav