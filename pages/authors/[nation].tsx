import React from 'react'
import App from '../../components/App'
import Pagination from '../../components/Pagination'
import { AuthorsByPageDocument } from '../../query'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { initializeApollo } from '../../lib/apolloClient' 
import Link from 'next/link'
import AuthorNav from '../../components/AuthorNav'

type Data = {
  poets: any[],
  count: number,
  curPage: number,
  nation: string | string[]
}

function Authors ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { poets, count, curPage, nation } = data
  return (
    <App>
      <div id="authors">
        <AuthorNav />
        <div className="author-table">
          <div className="author-list">
            {
              poets ? 
              poets.map(poet => (
                <div className="name" key={poet.id}>
                  <Link href={`/poet/${poet.id}`}>
                    <a>{poet.name}</a>
                  </Link>
                </div>
              )) :
              <>暂无数据</>
            }
          </div>
          <div className="poet-pagination">
            <Pagination nation={nation} curPage={curPage} count={count} pageSize={48} />
          </div>
        </div>
      </div>
    <style jsx>{`
      #authors {
        display: flex;
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
        margin-bottom: 20px;
      }
      .name {
        display: flex;
        align-items: center;
        width: 120px;
        margin-bottom: 20px;
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
      .poet-pagination {
        display: flex;
        justify-content: center;
      }
    `}</style>
    </App>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
  const apolloClient = initializeApollo()
  const { nation } = params
  const curPage = query.page || 1
  const perPageNum = 48

  let variables: any = {
    offset: (Number(curPage) - 1) * perPageNum,
    limit: perPageNum
  }
  if (nation !== 'all') {
    variables = {
      ...variables,
      nationality: nation
    }
  }
  const { data } = await apolloClient.query({
    query: AuthorsByPageDocument,
    variables
  })

  const poets = data.poetsByPage.rows.map(item => item.dataValues)

  const returnData: Data = {
    poets,
    count: data.poetsByPage.count,
    curPage: Number(curPage),
    nation: nation
  }
  return {
    props: {
      data: returnData
    }
  }
}


export default Authors