require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Banh Mi Co Kieu`,
    description: `A Vietnamese Restaurant in Montreal.`,
    author: `Pierrick Le Roy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
