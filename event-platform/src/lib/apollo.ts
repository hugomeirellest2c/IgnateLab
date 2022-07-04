import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pohfg126p701xkebg775c5/master',
    cache: new InMemoryCache()
})