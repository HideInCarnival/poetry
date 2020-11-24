import React from 'react'

function Search () {
    return (
        <div id="search-box">
            <input type="text" placeholder="Search" />
        <style jsx>{`
            #search-box {
                display: flex;
                align-items: center;
            }
            #search-box input {
                height: 32px;
                border-radius: 3px;
                width: 150px;
                cursor: text;
                border: 1px solid #DDDDE1;
                transition: 150ms;
                outline: none;
                font-family: expo-brand-book,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
                color: rgba(0, 0, 32, 0.8);
                font-weight: 400;
                font-size: 16px;
                
            }
            #search-box input:focus {
                transition: 150ms;
                border: 1px solid #B0B0BA;
            }
        `}</style>
        </div>
    )
}

export default Search