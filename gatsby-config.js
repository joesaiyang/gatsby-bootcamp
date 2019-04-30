module.exports = {
  siteMetadata: {
    title: `Clever`,
    author: `Joseph Yang`
  },
    plugins: [
        `gatsby-plugin-sass`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          }
        },
        `gatsby-transformer-remark`
    ]
}
