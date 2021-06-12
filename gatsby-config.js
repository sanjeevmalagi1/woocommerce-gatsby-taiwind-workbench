module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://3.108.139.224/graphql`,
      },
    },
    {
      resolve: `@pasdo501/gatsby-source-woocommerce`,
      options: {
        // Base URL of Wordpress site
        api: '3.108.139.224',

        // set to false to not see verbose output during build 
        // default: true
        verbose: true,

        // true if using https. otherwise false.
        https: false,
        api_keys: {
          consumer_key: 'ck_20eb162e9ab42e4530937409b4d1ca6661bc54a6',
          consumer_secret: 'cs_31d0281e1960b5149ea3193e808d50871336ba84',
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ['products', 'products/categories', 'products/attributes'],
        // Send the API keys as query string parameters instead of using the authorization header
        // OPTIONAL: defaults to false
        query_string_auth: false,
        // Version of the woocommerce API to use
        // OPTIONAL: defaults to 'wc/v3'
        api_version: 'wc/v3',
        // OPTIONAL: How many results to retrieve *per request*
        per_page: 100,
        // OPTIONAL: Custom WP REST API url prefix, only needed if not using 
        // the default prefix ('wp-json').
        // wpAPIPrefix: 'wp-json',
        // OPTIONAL: Support for URLs with ports, e.g. 8080; defaults to no port
        // port: '8080',
        // OPTIONAL: Encoding; default to 'utf8'
        encoding: 'utf8',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
