const faunadb = require('faunadb')
const cookie = require('cookie')
require('dotenv').config()

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
})


// route: /api/loginUser
exports.handler = async (event, context) => {
  try {
    // parse the string body into a useable JS object
    const { email, password } = JSON.parse(event.body)

    // use the Login function to authenticate the user - returns a token or throw an error 'authentication failed'
    const { secret } = await client.query(
      q.Login(q.Match(q.Index('users_by_email'), email), { password })
    )

    // store token in a httpOnly cookie
    const secretCookie = cookie.serialize('st', secret, {
      httpOnly: true,
      path: '/', // mandatory to see the cookie in devtools
      // secure: true // will block the cookie if sent over a not secured connexion
    })

    return {
      statusCode: 200,
      headers: {
        'Set-Cookie': secretCookie,
      },
      body: JSON.stringify({
        user: { email },
        isAuthenticated: true,
      }),
    }
  } catch (err) {
    if (err.message.includes('authentication failed')) {
      return {
        statusCode: 403,
        body: JSON.stringify({
          statusCode: 403,
          error: {
            email: 'Authentication failed. Verify your email',
            password: 'Authentication failed. Verify your password',
          },
        }),
      }
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      }
    }
  }
}
