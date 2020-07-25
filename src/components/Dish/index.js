import React from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'

import Card from '../ui/Card'

const Dish = ({ data }) => {
  return (
    <Card height="450px" width='90%'>
      <Card.Image tag={'div'} img={data.image.fluid} height="77%">
        <Card.Title>{data.name}</Card.Title>
      </Card.Image>
      <Card.Body height="23%">
        <div>
          <AiFillDollarCircle /> From ${data.size[0].price}
        </div>
      </Card.Body>
    </Card>
  )
}

export default Dish
