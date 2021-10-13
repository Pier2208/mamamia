import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import media from '../styles/breakpoint'
import Banner from '../components/Banner'
import Seo from '../components/seo'

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


const Home = () => {
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
        <BannerCatchline>Free delivery for all orders over $40!</BannerCatchline>
      </Banner>
    </Layout>
  )
}

export default Home
