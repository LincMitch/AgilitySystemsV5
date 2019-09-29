import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TrainingPage = () => (
  <Layout>
    <SEO title="Training" />
    <h1>TRAINING</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TrainingPage
