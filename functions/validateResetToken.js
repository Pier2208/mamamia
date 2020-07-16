const faunadb = require('faunadb')
const jwt = require('jsonwebtoken')

require('dotenv').config()

// create a new fauna client
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
})

// route: /api/resetPassword
exports.handler = async (event, context) => {
  try {
    const { token } = event.queryStringParameters

    // if token in db = valid token and delete it ELSE token not valid
    await client.query(
      q.If(
        // check if the provided token exists
        q.Exists(q.Match(q.Index('tokens_by_id'), token)),
        // delete it
        q.Delete(q.Match(q.Index('tokens_by_id'), token)),
        // not in db, returns an error
        q.Abort('Invalid token')
      )
    )

    // verify the token
    const verified = await jwt.verify(token, process.env.SERVER_SECRET)

    if (!verified) {
      throw new Error('Token is expired')
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Valid token',
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || error,
      }),
    }
  }
}
