import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import DishImage from '../components/Dish/DishImage'
import DishDetail from '../components/DishDetail'
import SEO from '../components/seo'

const Grid = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 20rem) [col-end])
    [center-end]
    minmax(5rem, 1fr) [full-end];
  grid-template-rows: calc(100vh - 3.5rem);
  padding-top: 3.5rem;
`

const DishTemplate = ({ data: { dish }, pageContext, location }) => {
  return (
    <Layout>
      <SEO title="Menu" />
      <Grid>
        <DishImage dishImage={dish.image.fluid} />
        <DishDetail dish={dish} />
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query getDish($slug: String) {
    dish: contentfulDish(slug: { eq: $slug }) {
      name
      description
      size {
        price
        size
      }
      vegan
      glutenFree
      ingredient
      category {
        name
      }
      image {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default DishTemplate
