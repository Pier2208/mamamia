import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => (props.width ? props.width : '80%')};
  max-width: ${props => props.maxWidth && props.maxWidth};
  height: ${props => (props.height ? props.height : 'fit-content')};
  box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.1);
  border-radius: ${props => (props.rounded ? '30px' : '0px')};
`

export const Header = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem 0.5rem;
  background-color: ${props => props.theme.colors.primaryColor};
  & h2 {
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  width: 100%;
  padding: 1.5rem;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 1.5rem;
  border-top: 3px solid ${props => props.theme.colors.offWhite};
`