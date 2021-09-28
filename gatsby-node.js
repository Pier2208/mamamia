// create pages dynamically
const path = require('path')
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // fetch all categories and all dishes
  // we only want the name of each category and in each category the names of the menuItems
  const result = await graphql(`
    query {
      categories: allContentfulMenuCategory {
        nodes {
          name
        }
      }

      dishes: allContentfulMenuItem {
        nodes {
          slug
          category {
            name
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('Failed to create categories and dishes', result.errors)
  }

  const categories = result.data.categories.nodes
  const dishes = result.data.dishes.nodes

  // create pages for categories (pizza, burgers, salads, pasta)
  // we pass the category name in context so that in the template we can query for all menuItems belonging to this category,
  // so the whole data fetching is occuring in the template
  categories.forEach(({ name }) => {
    createPage({
      path: `/menu/${name}`,
      component: path.resolve('src/templates/menuCategoryTemplate.js'),
      context: {
        category: name
      }
    })
  })

  // create pages for each dish
  dishes.forEach(({ category, slug }) => {
    createPage({
      path: `/menu/${category.name}/${slug}`,
      component: path.resolve('src/templates/menuItemTemplate.js'),
      context: {
        slug
      }
    })
  })
}
