import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Searchbar from '../components/Searchbar'
import SEO from '../components/seo'
import Dishes from '../components/Dishes'

const Grid = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 20rem) [col-end])
    [center-end]
    minmax(5rem, 1fr) [full-end];
  grid-template-rows: 9rem min-content;
  padding-top: 3.5rem;
`

const CategoryTemplate = ({ data, pageContext, location }) => {
  const dishes = data.dishes.edges
  const totalDishes = data.dishes.totalCount
  
  return (
    <Layout>
      <SEO title="Menu" />
      <Grid>
        <Searchbar category={pageContext.category} location={location} />
        <Dishes dishes={dishes} totalDishes={totalDishes} location={location} />
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query getDishes($category: String) {
    dishes: allContentfulDish(
      filter: { category: { name: { eq: $category } } }
      sort: { fields: name }
    ) {
      totalCount
      edges {
        node {
          id
          name
          slug
          category {
            name
          }
          size {
            size
            price
          }
          image {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default CategoryTemplate
