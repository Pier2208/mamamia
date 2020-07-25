import React from 'react'
import styled from 'styled-components'

import Dish from '../Dish'

const Grid = styled.div`
  display: grid;
  grid-column: center-start / center-end;
  height: 100vh;
`

const GridItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: max-content;
  grid-row-gap: 3rem;
  justify-items: center;
  margin: 2rem 0;
`

const Dishes = ({ dishes }) => {
  return (
    <Grid>
      <GridItems>
        {dishes &&
          dishes.map(({ node: dish }) => <Dish key={dish.id} data={dish} />)}
      </GridItems>
    </Grid>
  )
}

export default Dishes
