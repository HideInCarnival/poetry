import { useQuery, QueryHookOptions, DocumentNode, gql } from '@apollo/client'

export type Maybe<T> = T | null

export type Scalar = {
    ID: number,
    String: string,
    Boolean: boolean,
    Int: number,
    Float: number,
    DateTime: Date,
    JSON: { [key: string]: any }
}

// find poem
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
            author_id
        }
    }
`


// find poems
export type PoemsQueryVariables = {
    author: Maybe<Scalar['String']> | string[]
}
export function usePoemsQuery(options?: QueryHookOptions<any, PoemsQueryVariables>) {
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

// find poems by pages
export type PoemsByPageVariables = {
    author?: Maybe<Scalar['String']>
    offset: Maybe<Scalar["Int"]>
    limit: Maybe<Scalar["Int"]>
}
export function usePoemsByPageQuery(options: QueryHookOptions<any, PoemsByPageVariables>) {
    return useQuery(PoemsByPageDocument, options)
}
export const PoemsByPageDocument: DocumentNode = gql`
    query PoemsFindByPage ($author: String, $offset: Int!, $limit: Int!) {
        poemsByPage (author: $author , offset: $offset, limit: $limit) {
            count
            rows {
                dataValues {
                    id
                    title
                }
            }
        }
    }
`


// find poet
export type AuthorQueryVariables = {
    id: Maybe<Scalar["ID"]>
}
export function useAuthorQuery(options: QueryHookOptions<any, AuthorsQueryVariables>) {
    return useQuery(AuhtorsQueryDocument, options)
}
export const AuhtorQueryDocument: DocumentNode = gql`
    query GetAuthor ($id: ID) {
        poet(id: $id) {
            id
            name
            introduction
            nationality
        }
    }
`



// find poets
export type AuthorsQueryVariables = {
    nationality: Maybe<Scalar["String"]>
}
export function useAuthorsQuery(options?: QueryHookOptions<any, AuthorsQueryVariables>) {
    return useQuery(AuhtorsQueryDocument, options)
}
export const AuhtorsQueryDocument: DocumentNode = gql`
    query GetAuthors ($nationality: String) {
        poets(nationality: $nationality) {
            id
            name
            nationality
        }
    }
`



// find poets by page
export type AuthorsByPageVariables = {
    nationality?: Maybe<Scalar['String']>
    offset: Maybe<Scalar["Int"]>
    limit: Maybe<Scalar["Int"]>
}
export function useAuthorsByPageQuery(options: QueryHookOptions<any, AuthorsByPageVariables>) {
    return useQuery(AuthorsByPageDocument, options)
}
export const AuthorsByPageDocument: DocumentNode = gql`
    query AuthorsFindByPage ($nationality: String, $offset: Int!, $limit: Int!) {
        poetsByPage (nationality: $nationality, offset: $offset, limit: $limit) {
            count
            rows {
                dataValues {
                    id
                    name
                }
            }
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