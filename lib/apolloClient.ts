import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import merge from 'deepmerge'
import { useMemo } from 'react';


export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: 'http://localhost:4000/graphql'
        }),
        cache: new InMemoryCache()
    })
}

export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient()

    if (initialState) {
        const existingCache = _apolloClient.extract()
        const data = merge(initialState, existingCache)

        _apolloClient.cache.restore(data)
    }

    if (typeof window === 'undefined') return _apolloClient
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    }
    return pageProps
}

export function useApollo(pageProps) {
    const state = pageProps[APOLLO_STATE_PROP_NAME]
    const store = useMemo(() => initializeApollo(state), [state])
    return store
}