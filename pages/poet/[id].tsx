import React from 'react'
import App from '../../components/App'
import Link from 'next/Link'
import { AuhtorQueryDocument, usePoemsQuery } from '../../query'
import { initializeApollo } from '../../lib/apolloClient'
import { GetServerSideProps } from 'next'

function  Poet (props) {
  const {poet} = props
  const { loading, data } = usePoemsQuery({
    variables: {
      author: poet.name
    }
  })
  const poems = data?.poems
  return (
    <App>
      <div id="poet">
        <div className="title">
          <h1>{poet.name}</h1>
        </div>
        <div className="intro">
          <p>
            {poet.introduction}
          </p>
        </div>
        <div className="works">
          <h1>Works</h1>
          <div className="work-list">
            {
              loading ?
              <>查询中</> :
              poems.map(poem => (
                <div key={poem.id}>
                  <Link href={`/poem/${poem.id}?author=${poem.author}`}>
                    <a>{poem.title}</a>
                  </Link>
                </div>
              )) 
            }
          </div>
        </div>
      </div>
    <style jsx>{`
      .poet h1 {
        fot-size: 80px;
        letter-spqcing: -2px;
        font-family: SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;
      }
      .intro p, .work-list {
        max-width: 1000px;
        font-size: 20px;
        letter-spacing: -0.5px;
        font-weight: 300;
        padding-left: 20px;
      }
      .work-list {
        display: flex;
        flex-wrap: wrap;
        max-width: 1000px;
        font-size: 16px;
      }
      .work-list > div {
        width: 100px;
        display: flex;
        align-items: center;
        margin-right: 15px;
        margin-bottom: 20px;
      }
      .work-list a {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .work-list a:hover {
        color: #4630eb;
      }
    `}</style>
    </App>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const apolloClient = initializeApollo()
  const { id } = params
  const {data} = await apolloClient.query({
    query: AuhtorQueryDocument,
    variables: {
      id: id
    }
  })
  return {
    props: {
      poet: data.poet
    }
  }
}

export default Poet