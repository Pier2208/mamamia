const faunadb = require('faunadb')
const cookie = require('cookie')
require('dotenv').config()

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET
})

// route: /api/social-login
exports.handler = async (event, context) => {
  try {
    // parse the string body into a useable JS object
    const { id, email } = JSON.parse(event.body)

    if (!id || !email) return

    // check if we have a user with this social account id
    const existingUser = await client.query(
      q.Exists(q.Match(q.Index('users_by_id'), id))
    )

    // we have a user with this id, log the user in
    if (existingUser) {
      // get the user data and login him in
      // use the Login function to authenticate the user - returns a token or throw an error
      const { user, secret } = await client.query(
        q.Let(
          {
            userRef: q.Match(q.Index('users_by_id'), id),
            user: q.Select(['data'], q.Get(q.Var('userRef'))),
            secret: q.Select(
              ['secret'],
              q.Login(q.Var('userRef'), {
                password: `${id}${process.env.SERVER_SECRET}`
              })
            )
          },
          {
            user: q.Var('user'),
            secret: q.Var('secret')
          }
        )
      )
      // store token in a httpOnly cookie
      const secretCookie = cookie.serialize('st', secret, {
        httpOnly: true,
        path: '/' // mandatory to see the cookie in devtools
        // secure: true // will block the cookie if sent over a not secured connexion
      })
      userSecret = secret

      return {
        statusCode: 200,
        headers: {
          'Set-Cookie': secretCookie
        },
        body: JSON.stringify({
          statusCode: 200,
          isAuthenticated: true,
          user: { email: user.email }
        })
      }
    } else {
      // create a new user and automatically log him in
      const { user, secret } = await client.query(
        q.Let(
          {
            userRef: q.Select(
              ['ref'],
              q.Create(q.Collection('social_users'), {
                data: {
                  id,
                  email,
                  createdAt: new Date().toISOString()
                },
                credentials: {
                  password: `${id}${process.env.SERVER_SECRET}`
                }
              })
            ),
            secret: q.Select(
              ['secret'],
              q.Login(q.Var('userRef'), {
                password: `${id}${process.env.SERVER_SECRET}`
              })
            )
          },
          {
            user: q.Select(['data'], q.Get(q.Var('userRef'))),
            secret: q.Var('secret')
          }
        )
      )

      // store token in a httpOnly cookie
      const secretCookie = cookie.serialize('st', secret, {
        httpOnly: true,
        path: '/' // mandatory to see the cookie in devtools
        // secure: true // will block the cookie if sent over a not secured connexion
      })

      return {
        statusCode: 200,
        headers: {
          'Set-Cookie': secretCookie
        },
        body: JSON.stringify({
          isAuthenticated: true,
          user: { email: user.email }
        })
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error
      })
    }
  }
}
