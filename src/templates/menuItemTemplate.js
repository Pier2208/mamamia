// create pages programmatically for each menu item

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import MenuLinks from '../components/MenuLinks'
import { CustomButton } from '../components/Buttons/CustomButtons'
import media from '../styles/breakpoint'
import SEO from '../components/seo'

// REDUX ACTIONS
import { addToCart } from '../redux/actions/cartActions'

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
  border-color: var(--color-black);
  padding: 2px 5px;
  color: var(--color-black);
`

const MenuItemTemplate = ({ data, pageContext, location }) => {

  const dispatch = useDispatch(addToCart())
  
  // get all the data about a menu item
  const menuItem = data.menuItem

  // get the 1st format available from the size array (pizza have 3 formats (M/S/L) with M coming first in the array but burgers only one size: M)
  const [format, setFormat] = useState(menuItem.size[0])
  const [quantity, setQuantity] = useState(1)

  // retrieve the item price based on its size and filter out the size array
  const setPizzaSizeAndPrice = size => {
    let format = menuItem.size.filter(el => el.size === size)
    setFormat(format[0])
  }

  // add to cart the selected item
  const handleAddToCart = e => {
    e.preventDefault()

    const myPizza = {
      key: `${menuItem.name}-${format.size}`,
      name: menuItem.name,
      ...format,
      quantity,
      image: menuItem.image.gatsbyImageData,
      total: quantity * format.price
    }

    dispatch(addToCart(myPizza))
  }

  return (
    <Layout>
      <SEO title={menuItem.name} description={menuItem.description} />
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

          {/* Add pizza to cart form */}
          <form onSubmit={handleAddToCart}>
            <FormGroup>
              <label htmlFor="size">Select size: </label>
              <Select id="size" name="size" value={format.size} onChange={(e) => setPizzaSizeAndPrice(e.target.value)}>
                {menuItem.size.map(size => (
                  <option key={size.size} value={size.size}>
                    {size.size} - ${size.price}
                  </option>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <label htmlFor="quantity">Quantity: </label>
              <Select id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
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

export default MenuItemTemplate
