module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://c2d.comorins.com/api/front_view' // development api
            : 'http://c2d.comorins.com/api/front_view' // production api
    },
    future: {
        webpack5: false,
      },
}
