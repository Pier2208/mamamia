import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import categories from '../../constants/categories'
import CustomButton from '../ui/Buttons/CustomButton'

const Grid = styled.div`
  display: grid;
  grid-column: center-start / center-end;
`

const Container = styled.div`
  display: flex;
`

const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  > * {
    margin-right: 1rem;
  }
`

const Searchbar = ({ location }) => {
  return (
    <Grid>
      <Container>
        <MenuLinks>
          {categories.map(({ name, path }) => (
            <Link key={name} to={path}>
              <CustomButton
                type="button"
                uppercase
                active={location.pathname.includes(name.toLowerCase())}
                width='10rem'
              >
                {name}
              </CustomButton>
            </Link>
          ))}
        </MenuLinks>
      </Container>
    </Grid>
  )
}

export default Searchbar
