import React from 'react'
import Link from 'next/link'
import Search from './Search'
import { useRouter } from 'next/router'
function Header () {
    const {pathname} = useRouter()
    return (
        <header>
            <div className="container header-wrapper">
                <div className="left-nav">
                    <Link href="/">
                        <a className="title">
                            Poetry
                        </a>
                    </Link>
                </div>
                <div className="right-nav container">
                    <div className="search-box header-item">
                        <Search />
                    </div>
                    <Link href="/authors/all?page=1">
                        <a className={`${pathname.indexOf('authors')<0 ? '' : 'active'}`}>
                            <div className="choose-item">
                                <div>诗人</div>
                            </div>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={`${pathname.indexOf('about')<0 ? '' : 'active'}`}>
                            <div className="choose-item">
                                <div>关于</div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                header {
                    height: 60px;
                    padding: 0 16px;
                    position: sticky;
                    top: 0;
                    margin-bottom: 20px;
                    background-color: rgba(255, 255, 255, 0.95);
                    font-size: 16px;
                    color: #3B3B54;
                    border-bottom: 1px solid #f3f3f3;
                    max-width: 1200px;
                    z-index: 1;
                    margin: auto;
                }
                .container {
                    display: flex;
                    position: relative;
                    align-items: center;
                    height: 100%;
                }
                .header-wrapper {
                    justify-content: space-between;
                }
                .title {
                    font-size: 20px;
                    font-weight: 700;
                }
                .right-nav {
                    font-weight: 600;
                }
                .right-nav .header-item {
                    margin: 0 16px;
                }
                .right-nav a {
                    height: 40px;
                    padding: 0 16px;
                    border-radius: 3px;
                }
                .right-nav a.active {
                    background-color: rgba(0, 0, 0, .1)
                }
                .choose-item {
                    height: 100%;
                    display: flex;
                    align-items: center;
                }
                .right-nav a:hover {
                    background-color: rgba(0, 0, 0, .1)
                }
            `}</style>
        </header>
    )
}

export default Header