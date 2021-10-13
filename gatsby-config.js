require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Mamamia Pizza`,
    description: `A large choice of pizza, burgers, salads and pasta. Mamamia! Simply the best choice in town!`,
    author: `Pierrick Le Roy`,
    keywords: 'pizza, burger, salad, pasta, pizzeria, Montréal',
    image: `src/assets/images/chef.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
}
