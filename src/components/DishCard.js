import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'

const DishCard = ({ dish, location }) => {
  return (
    <Link to={`${location}/${dish.slug}`}>
      <Card>
        <GatsbyImage image={dish.image.gatsbyImageData} alt={dish.name} />
        <Name>{dish.name}</Name>
      </Card>
    </Link>
  )
}

const Card = styled.div`
  height: 370px;
  box-shadow: 2px 2px 30px rgba(79, 81, 80, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 30px rgba(79, 81, 80, 0.1);
  }
`
const Name = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
  color: var(--color-grey-dark);
`

DishCard.propTypes = {
  dish: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired
}

export default DishCard
