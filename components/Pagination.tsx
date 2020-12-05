import React from 'react'
import { numToArr } from '../lib/utils'
import { useRouter } from 'next/router'
function Pagination({nation, curPage, count, pageSize}) {
  const router = useRouter()
  const totalPageNum = Math.ceil(count / pageSize)
  
  function goToPage(pageNum: number) {
    router.push(`/authors/${nation}?page=${pageNum}`)
  }
  function renderToSimple(curPage: number, totalPage:number, sideShowNum: number, midShowNum: number) {
    const halfRange = Math.floor((midShowNum - 1) / 2)
    if (curPage <= sideShowNum) {
      return (
        <>
          {
            numToArr(1, sideShowNum + 1).map(pageNum => (
              <li className={`pagination-item ${curPage == pageNum ? 'active' : ''}`} key={pageNum}>
                <a onClick={() => {goToPage(pageNum)}}>{pageNum}</a>
              </li>
            ))
          }
          <li className={`pagination-item`}>
                <a>...</a>
          </li>
          <li className={`pagination-item ${curPage == totalPage ? 'active' : ''}`}>
                <a onClick={() => {goToPage(totalPage)}}>{totalPageNum}</a>
          </li>
        </>
      )
    }
    else if (curPage > sideShowNum && curPage <= totalPage - sideShowNum) {
      return (
        <>
          <li className={`pagination-item`}>
            <a onClick={() => {goToPage(1)}}>1</a>
           </li>
           <li className={`pagination-item`}>
                <a>...</a>
          </li>
          {
            numToArr(curPage - halfRange, curPage + halfRange).map(pageNum => (
              <li className={`pagination-item ${curPage == pageNum ? 'active' : ''}`} key={pageNum}>
                <a onClick={() => {goToPage(pageNum)}}>{pageNum}</a>
              </li>
            ))
          }
          <li className={`pagination-item`}>
                <a>...</a>
          </li>
          <li className={`pagination-item`}>
            <a onClick={() => {goToPage(totalPage)}}>{totalPage}</a>
          </li>
        </>
      )
    }else if (curPage > totalPage - sideShowNum) {
      return (
        <>
          <li className={`pagination-item`}>
            <a onClick={() => {goToPage(1)}}>1</a>
          </li>
          <li className={`pagination-item`}>
                <a>...</a>
          </li>
          {
            numToArr(totalPage - sideShowNum - 1, totalPage).map(pageNum => (
              <li className={`pagination-item ${curPage == pageNum ? 'active' : ''}`} key={pageNum}>
                <a onClick={() => {goToPage(pageNum)}}>{pageNum}</a>
              </li>
            ))
          }
        </>
      )
    }
  }
  return (
    <div>
      <ul className="pagination">
        <li className="pagination-prev">
          <a>
            <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
          </a>
        </li>
        {
          totalPageNum > 10 ?
          renderToSimple(curPage, totalPageNum, 3, 3)
          :
          numToArr(1, totalPageNum).map(pageNum => (
            <li className={`pagination-item ${curPage == pageNum ? 'active' : ''}`} key={pageNum}>
              <a onClick={() => {goToPage(pageNum)}}>{pageNum}</a>
            </li>
          ))
        }
        <li className="pagination-next">
          <a>
            <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path></svg>
          </a>
        </li>
      </ul>
    <style jsx global>{`
      .pagination {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 14px;
        font-weight: 500;
      }
      .pagination .pagination-item, .pagination-prev, .pagination-next {
        display: inline-block;
        height: 32px;
        min-width: 32px;
        line-height: 32px;
        vertical-align: center;
        list-style: none;
        border-radius: 2px;
        transition: all 0.3s;
        text-align: center;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
      }
      .pagination .pagination-item a {
        display: inline-block;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }

      .pagination li:hover {
        border: 1px solid #4630eb;
        color: #4630eb;
      }
      .pagination li.active {
        border: 1px solid #4630eb;
        color: #4630eb;
      }
      .pagination-prev, .pagination-item {
        margin-right: 8px;
      }
    `}</style>
    </div>
  )
}

export default Pagination