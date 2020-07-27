import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Grid = styled.div`
  display: grid;
  grid-column: full-start / col-start 5;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
`
const ImageWrap = styled.div`
  width: 700px;
  height: 700px;
  overflow: hidden;
`
const Image = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`

const DishImage = ({ dishImage }) => {
    const [size, setSize] = useState('M')
  return (
    <Grid>
      <ImageWrap>
        <Image fluid={dishImage} />
      </ImageWrap>
    </Grid>
  )
}

export default DishImage
