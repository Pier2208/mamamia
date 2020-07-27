exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      categories: allContentfulCategory {
        edges {
          node {
            name
          }
        }
      }
      dishes: allContentfulDish {
        edges {
          node {
            slug
            category {
              name
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Failed to create categories', result.errors)
  }

  const categories = result.data.categories.edges
  const dishes = result.data.dishes.edges

  categories.forEach(({ node: category }) => {
    createPage({
      path: `/menu/${category.name}`,
      component: require.resolve('./src/templates/category-template.js'),
      context: {
        category: category.name,
      },
    })
  })

  dishes.forEach(({ node: dish }) => {
    createPage({
      path: `/menu/${dish.category.name}/${dish.slug}`,
      component: require.resolve('./src/templates/dish-template.js'),
      context: {
        slug: dish.slug,
      },
    })
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/account/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = '/account/*'
    // Update the page.
    createPage(page)
  }

  if (page.path.match(/^\/reset-password/)) {
    page.matchPath = '/reset-password/*'
    createPage(page)
  }
}
