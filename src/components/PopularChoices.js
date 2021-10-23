import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  padding-top: var(--spacing-l);
  padding-bottom: var(--spacing-l);
`

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  justify-content: center;
`

const Title = styled.h2`
    font-weight: bold;
`

const PopularChoices = ({ children, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Section>
  )
}

export default PopularChoices
