const faunadb = require('faunadb')
const jwt = require('jsonwebtoken')
const sgMail = require('@sendgrid/mail')
require('dotenv').config()

// create a new fauna client
const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
})

// route: /api/forgotPassword
exports.handler = async (event, context) => {
  try {
    // get the user email
    const { email } = JSON.parse(event.body)

    // check if we have a user with this email
    const existingUser = await client.query(
      q.Exists(q.Match(q.Index('users_by_email'), email))
    )

    if (!existingUser)
      throw { email: 'User not Found. Verify your email or create an account.' }

    // create a token valid one hour
    const token = await jwt.sign({ email }, process.env.SERVER_SECRET, {
      expiresIn: '1h',
    })

    // save token in db
    await client.query(
      q.Create(q.Collection('tokens'), {
        data: {
          token,
          createdAt: new Date().toDateString(),
        },
      })
    )

    //create reset link
    const resetLink = `http://localhost:8888/resetPassword?token=${token}`

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'Pierrick Le Roy <p.leroy.mtl@gmail.com>',
      from: 'Pierrick Le Roy <p.leroy.mtl@gmail.com>',
      subject: 'Reset your password with Banh Mi Co Kieu',
      html: `<h1>Hello,</h1>
      <You received this email because you for got your password. Please click the button below
      to create a new one.
      <a href="${resetLink}">RESET MY PASSWORD</a>
      <p>The link will onlu valid for one hour</p>
      <p>The Banhj Mi Co Kieu Team</p>
      `,
    }
    // send email
    sgMail.send(msg)

    return {
      statusCode: 200,
      body: JSON.stringify({
        responseType: 'success',
        message: `An email with instructions has been sent to ${email}`,
      }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error,
      }),
    }
  }
}
