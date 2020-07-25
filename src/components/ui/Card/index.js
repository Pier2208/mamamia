import React from 'react'
import { Container, Header, Body, Image, Footer, Title } from './styles'
import PropTypes from 'prop-types'

const Card = ({ children, width, maxWidth, height, rounded }) => (
  <Container
    width={width}
    height={height}
    rounded={rounded}
    maxWidth={maxWidth}
  >
    {children}
  </Container>
)

Card.Header = ({ children }) => (
  <Header>
    <h2>{children}</h2>
  </Header>
)
Card.Body = ({ children, height }) => <Body height={height}>{children}</Body>
Card.Image = ({ children, tag, img, height }) => (
  <Image Tag={tag} fluid={img} height={height}>
    {children}
  </Image>
)
Card.Footer = ({ children }) => <Footer>{children}</Footer>
Card.Title = ({ children }) => (
  <Title>
    <h5>{children}</h5>
  </Title>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  rounded: PropTypes.bool,
}

export default Card
