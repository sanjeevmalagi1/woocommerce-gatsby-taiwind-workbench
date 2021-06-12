/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      posts: allWpPost {
        nodes {
          id
          uri
          title
          content
        }
      }
      products: allWcProducts {
        nodes {
          id
          name
          price
          sale_price
          status
          type
          slug
          description
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { posts, products } = result.data

  // Define the template to use
  const WcPostTemplate = require.resolve(`./src/templates/WpPost.js`)

  if (posts.nodes.length) {
    posts.nodes.map(post => {
      actions.createPage({
        path: post.uri,
        component: WcPostTemplate,
        context: post,
      })
    })
  }

  const WcShopTemplate = require.resolve(`./src/templates/WcShop.js`)
  const WcProductTemplate = require.resolve(`./src/templates/WcProduct.js`)

  const productsNodes = products.nodes;

  if (productsNodes.length) {
    actions.createPage({
      path: `/shop/`,
      component: WcShopTemplate,
      context: products.nodes,
    })

    productsNodes.map(product => {
      actions.createPage({
        path: `/${product.slug}/`,
        component: WcProductTemplate,
        context: product,
      })
    })
  }
}
