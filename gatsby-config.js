require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Mamamia Pizza`,
    description: `The best pizza in town.`,
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
