import React from 'react'
import App from '../../components/App'
import Link from 'next/Link'
import { useRouter } from 'next/router'
import { usePoemQuery, usePoemsQuery } from '../../query'

function Poem() {
  const router = useRouter()
  const { id, author } = router.query
  const poemBack = usePoemQuery({
    variables: {
      id: Number(id)
    }
  })
  const poem = poemBack?.data?.poem
  const poemsBack = usePoemsQuery({
    variables: {
      author
    }
  })
  const poems = poemsBack?.data?.poems
  return (
    <App>
      <div id="poem">
        <div className="left-nav">
          <nav>
            <div className="column">{author}的诗歌</div>
            <div className="nav-item">
              {
                poemsBack.loading ?
                  <>loading</> :
                  poems.map((poem) => (
                    <div key={poem.id}>
                      <Link href={`/poem/${poem.id}?author=${poem.author}`}>
                        <a className={poem.id == id ? 'cur-poem' : ''}>
                          {poem.title}
                        </a>
                      </Link>
                    </div>
                  ))
              }
            </div>
          </nav>
        </div>
        <div className="poem-body">
          {
            poemBack.loading ?
              <>loading</> :
              <>
                <div className="center">
                  <h3>{poem.title}</h3>
                  <div className="author">
                    <Link href={`/poet/${poem.author_id}`}>
                      <a>
                        {poem.author}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="main-text">
                  {poem.article}
                </div>
              </>
          }
        </div>
      </div>
      <style jsx>{`
            #poem {
                display: flex;
            }
            .left-nav {
                max-width: 200px;
                overflow: hidden;
            }
            .left-nav nav {
                width: 200px;
                padding: 20px 20px;
            }
            nav .column {
                font-weight: 600;
                color: rgba(0, 0, 21, 0.9);
                margin-bottom: 12px;
            }
            nav .nav-item > div{
                margin-bottom: 12px;
            }
            nav .nav-item a {
                font-weight: 300;
                font-size: 15px;
                width: 100%;
                padding-left: 16px;
            }

            nav .nav-item a.cur-poem {
                color: #4630eb;
            }

            nav .nav-item a:hover {
                color: #4630eb;
            }
            .poem-body {
                padding-left: 60px;
                max-width: 800px;
            }
            .poem-body h3 {
                font-size: 18px;
                font-weight: 600;
                color: #3b3b54;
            }
            .author {
                margin-bottom: 20px;
                color: #09f;
            }
            .main-text {
                color: #3b3b54;
                font-weight: 600;
                line-height: 1.5;
                white-space: pre-line;
            }
            .center {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: auto;
            }
        `}</style>
    </App>
  )
}

export default Poem