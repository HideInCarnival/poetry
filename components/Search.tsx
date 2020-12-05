import React from 'react'

function Search() {
  return (
    <div id="search-box">
        <input type="search" placeholder="Search..." autoComplete="off" />
        <span className="icon-search">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg>
        </span>
      <style jsx>{`
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

        `}</style>
    </div>
  )
}

export default Search