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

// HOw do you make this a functional component?

class BlogIndex extends React.Component {
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
    const posts = data.allContentfulBlog.edges
    console.log(posts)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
{/* 
    <div className="Hero">
      <div className="HeroGroup">
        <h1>AGILITY SYSTEMS <br/> line 2<br/> line 3</h1>
        <p>Wherever you are in your journey, we're here to help<br/> line 2<br/> line 3</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses more comming</h2>
      <div className="CardGroup">
          <Card 
            title="DesignSystem"
            text="10 sections"
            image={require('../images/wallpaper.jpg')} />
          <Card 
            title="React for Designers"
            text="11 sections"
            image={require('../images/wallpaper2.jpg')} />
          <Card 
            title="Sound Design"
            text="5 sections"
            image={require('../images/wallpaper3.jpg')} />
          <Card 
            title="ARKit 2"
            text="10 sections"
            image={require('../images/wallpaper4.jpg')} />
      </div>
    </div>
      <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title="React for Designers"
        text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."         
        /> */}
      {/* <SectionCaption>12 sections - 6 hours</SectionCaption> */}
        <SectionCellGroup>
          {posts.map(({ node }) => {
              const title = node.blog || node.slug
              console.log(node.abstract.json)
              return (
                <div key={node.slug}>
                      <Link style={{ boxShadow: `none` }} to={node.slug}>
                        <Cell title={title} />
                        xxx1{documentToReactComponents(node.abstract.json, options)}
                      </Link>
                </div>
              )
            })}
        </SectionCellGroup> 
        {/* <Bio /> */}
      </Layout>
    )
  }
}
export default BlogIndex
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlog {
      edges {
        node {
          blog
          date
          slug
          image {
            fluid {
              src
            }
          }
          richText {
            json
          }
          abstract {
            json
          }
        }
      }
    }
  }
`
