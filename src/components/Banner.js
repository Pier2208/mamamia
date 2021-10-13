import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import media from '../styles/breakpoint'

const Aside = styled.aside`
  /* make the banner full-bleed despite the <main> width being 1280px */
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  height: fit-content;
  background-color: var(--color-secondary);
`

/* constrains the content of the banner in the max-width of the <main>
https://archive.hankchizljaw.com/wrote/creating-a-full-bleed-css-utility/ */
const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: var(--spacing-m);
  margin-top: 8rem;
  margin-bottom: 8rem;

  ${media.s`
    height: 280px;
    flex-direction: row;
    padding: 0 var(--spacing-m);
    `}
`

const Text = styled.div`
  max-width: 60ch;
`

const Banner = ({ children }) => {
  return (
    <Aside>
      <Wrapper>
        <Text>{children}</Text>
        <StaticImage
          src="../assets/images/delivery-guy.png"
          alt="Super fast delivery."
          placeholder="blurred"
          width={420}
        />
      </Wrapper>
    </Aside>
  )
}

export default Banner
