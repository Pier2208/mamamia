const cookie = require('cookie')
const faunadb = require('faunadb')
require('dotenv').config()

// route: /api/logoutUser
exports.handler = async (event, context) => {
  const cookies = event.headers.cookie && cookie.parse(event.headers.cookie)

  // create a new fauna client
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: cookies.st || process.env.FAUNA_DB_SECRET,
  })

  try {
    const logoutResult = await client.query(q.Logout(true))
    return {
      statusCode: 200,
      headers: {
        'Set-Cookie':
          "st=''; path='/'; expires='Thu, 01 Jan 1970 00:00:00 GMT'",
      },
      body: JSON.stringify({ isLoggedout: logoutResult }),
    }
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}
