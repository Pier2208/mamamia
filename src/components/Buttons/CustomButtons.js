import styled from 'styled-components'

export const CustomButton = styled.button.attrs({
  type: 'submit'
})`
  background-color: ${props => props.bgColor || 'var(--color-secondary)'};
  color: ${props => props.color || 'var(--color-white)'};
  outline: none;
  border: ${props => props.border || 'none'};
  font-family: var(--font-form);
  font-weight: bold;
  font-size: ${props => props.fontSize || '1.5rem'};
  text-transform: uppercase;
  border-radius: 10px;
  width: ${props => props.width|| 'fit-content'};
  padding: ${props => props.padding || '1rem'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`
export const ButtonLink = styled.button.attrs({
  type: 'button'
})`
  font-size: 2.3rem;
  font-family: var(--font-display);
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ color }) =>
    color ||
    'var(--color-grey-dark)'}; // get the color passed into the component props
  position: relative;
`
