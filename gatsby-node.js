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