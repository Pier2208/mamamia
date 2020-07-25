import React, { useRef } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Slider from '../components/Slider'
import useDOMNodeSize from '../hooks/useDOMNodeSize'

const Grid = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 20rem) [col-end])
    [center-end]
    minmax(5rem, 1fr) [full-end];
  grid-template-rows: 100vh 100vh repeat(2, min-content);
`

const HeroSection = styled.section`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 20rem) [col-end])
    [center-end]
    minmax(5rem, 1fr) [full-end];
    margin-top: 3.5em;
`

const HeroSlider = styled.div`
  grid-column: full-start / col-start 5;
`
const HeroCallToAction = styled.div`
  grid-column: col-start 5 / full-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  text-align: justify;
  & h1 {
    font-size: 4rem;
    font-weight: 300;
    margin-bottom: 3rem;
  }
  & h2 {
    font-weight: 300;
  }
`

const IndexPage = ({ data: { images } }) => {
  const sliderRef = useRef(null)
  const { width } = useDOMNodeSize(sliderRef)

  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
        <HeroSection>
          <HeroSlider ref={sliderRef}>
            <Slider
              slides={images.edges}
              sliderWidth={width}
              autoplay={4}
            />
          </HeroSlider>
          <HeroCallToAction>
            <h1>So Delicious...</h1>
            <h2>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus.
            </h2>
          </HeroCallToAction>
        </HeroSection>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "home" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default IndexPage
