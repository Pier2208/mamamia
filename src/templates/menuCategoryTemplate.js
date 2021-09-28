// create pages programmatically for each categories
import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import DishCard from '../components/DishCard'
import MenuLinks from '../components/MenuLinks'

const Grid = styled.section`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: center;
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 0;
  margin: 0;
`

// data is coming from the query below
// pageContext is passed from gatsby-node (context)
// location is an object + location.pathname gives the current path (ex: /menu/pizza)
const menuCategoryTemplate = ({ data, pageContext, location }) => {
  const dishes = data.dishes.nodes[0].menuitem
  const categoryDescription = data.dishes.nodes[0].description.description
  return (
    <Layout>
      <Header>
        <MenuLinks />
        <p>{categoryDescription}</p>
      </Header>
      <Grid>
        {dishes.map(dish => (
          <DishCard key={dish.id} dish={dish} location={location.pathname}>
            <h2>{dish.name}</h2>
          </DishCard>
        ))}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query getDishesByCategory($category: String) {
    dishes: allContentfulMenuCategory(filter: { name: { eq: $category } }) {
      nodes {
        description {
          description
        }
        menuitem {
          id
          name
          slug
          image {
            gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 300)
          }
        }
      }
    }
  }
`

export default menuCategoryTemplate
