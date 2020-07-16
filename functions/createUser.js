const faunadb = require('faunadb')
const cookie = require('cookie')
require('dotenv').config()

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
})

exports.handler = async (event, context) => {
  try {
    // parse the string body into a useable JS object
    const { email, password } = JSON.parse(event.body)

    // data validation
    if (!email) {
      throw { email: 'Email is required' }
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      throw { email: 'Email is invalid' }
    }
    if (!password) {
      throw { password: 'Password is required' }
    }
    if (password.length < 8) {
      throw { password: 'Password must be at least 8 characters' }
    }


    // check email not already in database - Exists returns a bool true/false
    // Match() finds a perfect match given a term and an index and returns a ref
    // Exists() takes a ref and returns a bool true/false
    const existingEmail = await client.query(
      q.Exists(q.Match(q.Index('users_by_email'), email))
    )

    if (existingEmail) {
      throw { email: 'Email already in use' }
    }

    // create new user
    const { user, secret } = await client.query( 
      q.Let(
        {
          // Create() returns a document containing both the ref (unique identifier) and the data
          // We chose to extract only the ref (identifier) from the document
          userRef: q.Select(
            ['ref'],
            q.Create(q.Collection('local_users'), {
              data: {
                email,
                createdAt: new Date().toISOString(),
              },
              credentials: { password },
            })
          ),
          // Login() takes a ref and returns an object if the password matches the one stored in the db
          // we extract the secret with Select()
          secret: q.Select(['secret'], q.Login(q.Var('userRef'), { password })),
        },
        {
          // Get() takes a ref and returns a document containing both data and metadata
          // Select() takes a path and a document and returns the data from the path
          user: q.Select(['data'], q.Get(q.Var('userRef'))),
          secret: q.Var('secret'),
        }
      )
    )

    // store token in a httpOnly cookie
    const secretCookie = cookie.serialize('st', secret, {
      expires: '60',
      httpOnly: false,
      path: '/', // mandatory to see the cookie in devtools
      //secure: true // will block the cookie if sent over a not secured connexion
    })

    return {
      statusCode: 200,
      headers: {
        'Set-Cookie': secretCookie,
      },
      body: JSON.stringify({
        isAuthenticated: true,
        user,
      }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    }
  }
}
