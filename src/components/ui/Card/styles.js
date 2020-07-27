import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => (props.width ? props.width : '80%')};
  max-width: ${props => props.maxWidth && props.maxWidth};
  height: ${props => (props.height ? props.height : 'fit-content')};
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.3);
  border-radius: ${props => (props.rounded ? '30px' : '0px')};
  overflow: hidden;
  cursor: pointer;
  & svg {
    font-size: 2.5rem;
    margin: 0 .5rem;
  }
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
  height: ${props => props.height && props.height};
  padding: 1.5rem;
  & div {
    display: flex;
    align-items: center;
    width: 100%;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 1.5rem;
  border-top: 3px solid ${props => props.theme.colors.offWhite};
`

export const Image = styled(BackgroundImage)`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: ${props => props.height && props.height};
  position: relative;
`

export const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%) translateY(50%);
  width: fit-content;
  max-width: 90%;
  padding: 0.6rem 0.4rem;
  text-align: center;
  background: ${props => props.theme.colors.primaryColor};
  border: 2px solid ${props => props.theme.colors.offWhite};
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  & h5 {
    font-size: 1rem;
    color: ${props => props.theme.colors.offWhite};
    padding: 0rem 0.4rem;
    letter-spacing: 1px;
  }
`
