// create pages programmatically for each menu item

import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import MenuLinks from '../components/MenuLinks'
import { CustomButton } from '../components/CustomButtons'
import media from '../styles/breakpoint'

const Grid = styled.section`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  justify-content: center;

  ${media.s`
    grid-template-columns: repeat(2, 1fr);
  `}
`

const MenuItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.h1`
  font-size: 3rem;
  letter-spacing: 2px;
`

const FormGroup = styled.div`
  margin-bottom: var(--spacing-m);
`

const Select = styled.select`
  outline: none;
  border-radius: 3px;
  border-color: var(--color-grey-dark);
`

const menuItemTemplate = ({ data, pageContext, location }) => {
  const menuItem = data.menuItem
  return (
    <Layout>
      <MenuLinks />
      <Grid>
        <GatsbyImage
          image={menuItem.image.gatsbyImageData}
          alt={menuItem.name}
        />
        <MenuItemInfo>
          <Name>{menuItem.name}</Name>
          <p>{menuItem.description}</p>
          <p>Ingredients: {menuItem.ingredients.join(', ')}</p>
          <form>
            <FormGroup>
              <label htmlFor="size">Select size: </label>
              <Select id="size" name="size">
                {menuItem.size.map(size => (
                  <option key={size.size} value="">
                    {size.size} - ${size.price}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <label htmlFor="quantity">Quantity: </label>
              <Select id="quantity" name="quantity">
                {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <CustomButton>Add to cart</CustomButton>
          </form>
        </MenuItemInfo>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query getMenuItem($slug: String) {
    menuItem: contentfulMenuItem(slug: { eq: $slug }) {
      name
      description
      size {
        size
        price
      }
      ingredients
      category {
        name
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`

export default menuItemTemplate
