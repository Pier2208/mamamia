import styled, { css } from 'styled-components'

const Legend = styled.legend`
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  letter-spacing: 4px;
  margin-bottom: 2rem;
  ${({ color }) =>
        color &&
        css`
      color: ${color};
    `}
`

export default Legend