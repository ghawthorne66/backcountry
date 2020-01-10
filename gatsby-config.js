/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Backroads",
    description:
      "Explore awesome worldwide tours & discover what makes each of them unique.  Forget your daily routine & say yes to adventure",
    author: "@johndoe",
    data: {
      name: "john",
      age: 24,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `wtuhyv452pe0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 
        "GEbwZy8CbYMcOToK3vJ9eJWprwjQVAlWSfgfqVdrv98",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
  ],
  /* Your site config here */
}
