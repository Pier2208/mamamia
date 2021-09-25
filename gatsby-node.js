// create pages dynamically

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // fetch all categories and all dishes
  const result = await graphql(`
    query {
      categories: allContentfulMenuCategory {
        edges {
          node {
            name
          }
        }
      }
      menuItems: allContentfulMenuItem {
        edges {
          node {
            slug
            menuCategory {
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
      component: require.resolve('./src/templates/menuCategory-template.js'),
      context: {
        category: category.name,
      },
    })
  })

  dishes.forEach(({ node: dish }) => {
    createPage({
      path: `/menu/${dish.category.name}/${dish.slug}`,
      component: require.resolve('./src/templates/menuItem-template.js'),
      context: {
        slug: dish.slug,
      },
    })
  })
}
