import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wave from '../components/Wave'
import styled from 'styled-components'
import Cell from '../components/Cell'
import Card from "../components/Card"
import Section from '../components/Section'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

class About extends React.Component {
  render() {
    const options = {
      renderNode: {
        "embedded-asset-block": node => {
          if (node.data.target.hasOwnProperty('fields')) {
            return (
              <img src={node.data.target.fields.file["en-US"].url} />
            )
          }

          return null
        }
      }
    }

    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Training" />

    <div className="Hero HeroSmall">
      <div className="HeroGroup">
        <h1>About Agility Systems</h1>
        <p>Who we are and what we are about</p>   
        <Wave />
      </div>
    </div>

    <h2>Purpose</h2>

    <Section
      image={require('../images/wallpaper2.jpg')}
      title="Our Experience"
      text="how we can to be"         
      />

    <h2>Steve Profile</h2>

    <Section
      image={require('../images/wallpaper2.jpg')}
      title="Jeanne Profile"
      text="Text goes here"         
      />

    <h2>Will Profile</h2>

    
      </Layout>
    )
  }
}
export default About
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
   
      
    
  }
`
