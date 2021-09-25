import styled from 'styled-components'
import media from '../../styles/breakpoint'

const Links = styled.div`
  // links are stacked in column on small devices
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;


  // add a left margin to all link items except for the first one
  & > *:not(:first-child) {
    margin-left: var(--spacing-m);
  }

  // links at stacked in row starting small breakpoint
  ${media.s`
  flex-direction: row;
  `}
`

export default Links
