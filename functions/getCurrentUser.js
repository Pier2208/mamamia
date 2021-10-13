const cookie = require('cookie')
const faunadb = require('faunadb')
require('dotenv').config()

// route: /api/getCurrentUser
exports.handler = async (event, context) => {
  const cookies = event.headers.cookie && cookie.parse(event.headers.cookie)

  if (!cookies || !cookies.st) {
    return {
      statusCode: 401,
      body: JSON.stringify({
        unauthorized: 'You are not authorized to access this resource.',
      }),
    }
  }

  //if cookie is invalid, it throws an error "unauthorized"

  // create a new fauna client
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: cookies.st,
  })

  try {
    // get user info
    // Identity() returns a ref associated with the authentication token or throw an error
    const { data } = await client.query(q.Get(q.CurrentIdentity()))
    if (data) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          user: { email: data.email },
          isAuthenticated: true,
        }),
      }
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify({ user: {}, isAuthenticated: false }),
      }
    }
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}
