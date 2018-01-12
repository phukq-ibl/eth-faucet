
module.exports = {
    fb: {
        statusUrl: 'https://graph.facebook.com/',
        acccessToken: process.env.FB_TOKEN || '??'
    },
    gist :{
        host: 'api.github.com',
        path: '/gists/'
    },
    fullnode: {
        address: 'http://localhost:8545'
    },
    db :{
        host: process.env.DB_HOST || '',
        port: process.env.DB_PORT || '',
        uid: process.env.DB_UID || '',
        pwd: process.env.DB_PWD || '',
        name: process.env.DB_NAME || ''
    }
}