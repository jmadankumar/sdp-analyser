module.exports = {
  siteMetadata: {
    title: `Session Description Protocol Analyser`,
    description: `Session description protocol parser and analyser`,
    author: `Madan Kumar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `session description protocol analyser`,
        short_name: `sdp analyser`,
        start_url: `/`,
        background_color: `#48bb78`,
        theme_color: `#48bb78`,
        display: `minimal-ui`,
        icon: `src/images/sdp.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
