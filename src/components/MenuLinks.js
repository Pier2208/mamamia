import React from 'react'
import categoryLinks from '../constants/category-links'
import styled from 'styled-components'
import NavLink from './Navbar/NavLink'
import Icon from './Icon'
import Line from './Line'

const Wrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding-left: 0;
  margin: 0;
`

const MenuLink = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-right: var(--spacing-l);
  
`

const MenuLinks = () => {
  return (
    <>
      <Wrapper>
        {categoryLinks.map(link => {
          return (
            <MenuLink key={link.name}>
              <Icon name={link.iconName} />
              <NavLink
                to={link.path}
                color={'var(--color-grey-dark)'}
                
                activeStyle={{
                  color: 'var(--color-primary)',
                  fontWeight: 'bold',
                  textDecoration: 'underline'
                }}
              >
                {link.name.toUpperCase()}
              </NavLink>
            </MenuLink>
          )
        })}
      </Wrapper>
      <Line />
    </>
  )
}

export default MenuLinks
