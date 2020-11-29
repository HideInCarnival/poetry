import { useQuery, QueryHookOptions, DocumentNode, gql } from '@apollo/client'

export type Maybe<T> = T | null

export type Scalar = {
    ID: string,
    String: string,
    Boolean: boolean,
    Int: number,
    Float: number,
    DateTime: Date,
    JSON: { [key: string]: any }
}

export type PoemQueryVariables = {
    id: Maybe<Scalar['ID']>
}
export function usePoemQuery (options: QueryHookOptions<any, PoemQueryVariables>) {
    return useQuery(PoemQueryDocument, options)
}
export const PoemQueryDocument: DocumentNode = gql`
    query GetPoem($id: ID) {
        poem(id: $id) {
            id
            title
            author
            article
        }
    }
`

export type PoemsQueryVariables = {
    author: Maybe<Scalar['String']> | String[]
}
export function usePoemsQuery (options?: QueryHookOptions<any, PoemsQueryVariables>) {
    return useQuery(PoemsQueryDocument, options)
}
export const PoemsQueryDocument: DocumentNode = gql`
    query GetPoems ($author: String) {
        poems(author: $author) {
            id
            title
            author
        }
    }
`


export function useHelloQuery () {
    return useQuery(helloQueryDocument);
}
export const helloQueryDocument = gql`
    query {
        hello
    }
`