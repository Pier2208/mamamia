import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { AiFillDollarCircle } from 'react-icons/ai'

import Card from '../ui/Card'

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
`

const Dish = ({ dish, location }) => {
  return (
    <Card height="450px" width="90%">
      <StyledLink to={`${location}/${dish.slug}`}>
        <Card.Image tag={'div'} img={dish.image.fluid} height="77%">
          <Card.Title>{dish.name}</Card.Title>
        </Card.Image>
        <Card.Body height="23%">
          <div>
            <AiFillDollarCircle /> From ${dish.size[0].price}
          </div>
        </Card.Body>
      </StyledLink>
    </Card>
  )
}

export default Dish
