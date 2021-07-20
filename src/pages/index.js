import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://storage.googleapis.com/trusty-media-bucket/products/44e6b76f-fdca-485c-8f74-fffbac694501/18e29dfc-eb06-4fe4-827c-c86cf5f8b3cf.jpg"
      />
    </Layout>
  )
}

export default IndexPage