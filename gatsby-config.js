module.exports = {
  pathPrefix: '/wedding.steventing.com',
  siteMetadata: {
    title: 'Gary & Angel',
    author: 'Steven',
    description: 'Gary Angel Wedding Site'
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Satisfy`],
    //     display: 'swap'
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Wedding',
        short_name: 'Wedding',
        start_url: '/wedding',
        background_color: '#1b1f22',
        theme_color: '#7f828d',
        display: 'minimal-ui',
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`
  ]
}
