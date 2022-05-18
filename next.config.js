const env = process.env

/*
|--------------------------------------------------------------------------
| App
|--------------------------------------------------------------------------
*/
const { DOMAIN = 'http://localhost:3000' } = env

/*
|--------------------------------------------------------------------------
| Cookie
|--------------------------------------------------------------------------
*/
const {
  COOKIE_DOMAIN,
  COOKIE_NAME = 'session_cookie',
  COOKIE_PASSWORD = 'ETKG2BEpGOlajskndfiu2h39841jknasdfmiun231iunkjhan__dsf_!@#$IroMhAe3FQWEXIWhUCsC5T8',
} = env

/*
|--------------------------------------------------------------------------
| General
|--------------------------------------------------------------------------
*/
const {
  UNIX_TIME_KEY = '@UNIX_TIME',
} = env

/*
|--------------------------------------------------------------------------
| Bugsnag
|--------------------------------------------------------------------------
*/
const { BUGSNAG_API_KEY = 'kjnj18j12uoi3ndf' } = env


/*
|--------------------------------------------------------------------------
| Google (Authentication)
|--------------------------------------------------------------------------
*/
const { GOOGLE_CLIENT_ID = 'fake_google_client_id' } = env

/*
|--------------------------------------------------------------------------
| Microsoft Clarity
|--------------------------------------------------------------------------
*/
const { MICROSOFT_CLARITY_KEY = 'fake_microsoft_clarity_key' } = env

module.exports = {
  serverRuntimeConfig: {
    DOMAIN,
    COOKIE_DOMAIN,
    COOKIE_NAME,
    COOKIE_PASSWORD,
  },
  publicRuntimeConfig: {
    IS_DEBUG_MODE: process.env.DEBUG_MODE,
    VERSION: require('./package.json').version,
    BUGSNAG_API_KEY,
    GOOGLE_CLIENT_ID,
    MICROSOFT_CLARITY_KEY,
    UNIX_TIME_KEY,
  },
  headers: () => [
    {
      source: '/(.*)?',
      headers: [
        {
          key: 'Referrer-Policy',
          value: 'same-origin',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'deny',
        },
        {
          key: 'X-XSS-Protection',
          value: '1',
        },
      ],
    },
  ],
}
