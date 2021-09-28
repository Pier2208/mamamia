import styled from 'styled-components'

const CustomButton = styled.button.attrs({
  type: 'submit'
})`
  background-color: ${({ bgColor }) => bgColor || 'var(--color-secondary)'};
  color: ${({ color }) => color || 'var(--color-white)'};
  outline: none;
  border: none;
  font-family: var(--font-body);
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  border-radius: 10px;
  width: fit-content;
  padding: 1rem var(--spacing-m);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default CustomButton
