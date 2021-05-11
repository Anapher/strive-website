module.exports = {
   siteMetadata: {
      title: 'Strive',
      description: `Open source video conference system.`,
      author: `@anapher`,
      siteUrl: `https://www.openstrive.org`,
   },
   plugins: [
      'gatsby-plugin-styled-components',
      'gatsby-plugin-image',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sitemap',
      {
         resolve: 'gatsby-plugin-manifest',
         options: {
            icon: 'src/images/icon.png',
            theme_color: '#2980b9',
         },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'images',
            path: './src/images/',
         },
         __key: 'images',
      },
      {
         resolve: `gatsby-plugin-google-fonts`,
         options: {
            fonts: [`Roboto Condensed\:700`, `Roboto`],
            display: 'swap',
         },
      },
   ],
};
