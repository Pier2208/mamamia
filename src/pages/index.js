import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import media from '../styles/breakpoint'
import Banner from '../components/Banner'
import Seo from '../components/seo'
import DishCard from '../components/DishCard'
import PopularChoices from '../components/PopularChoices'

const HeroSection = styled.section`
  width: 100%;
  margin-top: var(--spacing-l);
  display: grid;
  justify-items: center;
  align-items: center;
  column-gap: 2rem;
  row-gap: 5rem;

  ${media.m`
  grid-template-columns: repeat(2, 1fr);
  `}
`

const HeroText = styled.div`
  p {
    font-family: var(--font-accent);
    max-width: 40ch;
    font-size: 1.2rem;
  }
`

const BannerTitle = styled.h2`
  font-family: var(--font-body);
  text-transform: uppercase;
  color: var(--color-white);
  font-weight: bold;
`

const BannerCatchline = styled.p`
  font-family: var(--font-body);
  color: var(--color-white);
  font-size: 1.8rem;
`

export const query = graphql`
  query PopularPizzaQuery {
    pizza: allContentfulMenuItem(
      filter: { category: { name: { eq: "pizza" } } }
      limit: 3
    ) {
      nodes {
        name
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        slug
      }
    }

    burgers: allContentfulMenuItem(
      filter: { category: { name: { eq: "burgers" } } }
      limit: 3
    ) {
      nodes {
        name
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        slug
      }
    }

    pasta: allContentfulMenuItem(
      filter: { category: { name: { eq: "pasta" } } }
      limit: 3
    ) {
      nodes {
        name
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        slug
      }
    }
  }
`

const Home = ({ data: { pizza, pasta,  burgers }}) => {

  return (
    <Layout>
      <Seo title="Home" />
      <HeroSection>
        {/* Hero 1st row */}
        <StaticImage
          src="../assets/images/chef.png"
          alt="Welcome to Mamamia Pizza."
          placeholder="blurred"
          width={500}
          height={500}
        />
        <HeroText>
          <h2>From Italy with love</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <StaticImage
            src="../assets/images/Certificate-of-excellence-2019-Tripadvisor.png"
            alt="Tripadvisor Certificate of excellence 2019."
            placeholder="blurred"
            width={100}
          />
        </HeroText>

        {/* Hero 2nd row */}
        <HeroText>
          <h2>All fresh and organic</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </HeroText>
        <StaticImage
          src="../assets/images/pizza.png"
          alt="A wide choice of pizza."
          placeholder="blurred"
          width={350}
        />
      </HeroSection>

      {/* Banner */}
      <Banner>
        <BannerTitle>Save your cash</BannerTitle>
        <BannerCatchline>
          Free delivery for all orders over $40!
        </BannerCatchline>
      </Banner>

      {/* Popular Choices: Pizza */}
      <PopularChoices title="Popular Pizza">
        {pizza.nodes.map(dish => (
          <DishCard dish={dish} location={'/menu/pizza'} />
        ))}
      </PopularChoices>

      {/* Popular Choices: Pasta */}
      <PopularChoices title="Popular Pasta">
        {pasta.nodes.map(dish => (
          <DishCard dish={dish} location={'/menu/pasta'} />
        ))}
      </PopularChoices>

      {/* Popular Choices: Burgers */}
      <PopularChoices title="We also make delicious burgers!">
        {burgers.nodes.map(dish => (
          <DishCard dish={dish} location={'/menu/burgers'} />
        ))}
      </PopularChoices>
    </Layout>
  )
}

export default Home
