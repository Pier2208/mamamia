import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const Grid = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr)
    [center-start] repeat(8, [col-start] minmax(min-content, 20rem) [col-end])
    [center-end]
    minmax(5rem, 1fr) [full-end];
  grid-template-rows: 100vh min-content 100vh;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
      </Grid>
    </Layout>
  )
}


export default IndexPage
