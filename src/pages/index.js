import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>AGILITY SYSTEMS</h1>
        <p>Wherever you are in your journey, we're here to help</p>
        <Link to="/page-2/">Go to page 2</Link>        
      </div>
    </div>
  </Layout>
)

export default IndexPage
