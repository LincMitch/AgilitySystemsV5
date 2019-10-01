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

// How do you make this a functional component?

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
    <div className="Hero">
      <div className="HeroGroup">
        <img src={require('../images/logo.svg')} width="400"/>    
        <p>Wherever you are in your journey, <br/> we're here to help</p>
        <Link to="/page-2/">      
          <img src={require('../images/arrow_downward.svg')} height='30px'/>
        </Link>
        {/* <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div> */}
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Challenges - we can help with</h2>
      <div className="CardGroup">
          <Card 
            title="Starting Up"
            text="Kick things off"
            image={'https://rmwc.io/images/backgrounds/mb-bg-fb-07.png'} />
          <Card 
            title="Uplift"
            text="Improve what you already have"
            image={'https://rmwc.io/images/backgrounds/mb-bg-fb-16.png'} />
          <Card 
            title="Transformation"
            text="Swtich operationing model"
            image={'https://rmwc.io/images/backgrounds/mb-bg-fb-03.png'} />
          <Card 
            title="Learning"
            text="Training, coaching and mentoring"
            image={'https://rmwc.io/images/backgrounds/mb-bg-fb-03.png'}
           />
          <Card 
            title="Cover"
            text="Provide expert resource"
            image={'https://rmwc.io/images/backgrounds/mb-bg-fb-07.png'} />
          <Card 
            title="Scale"
            text="Scale up large pieces of work"
            image={'https://rmwc.io/images/backgrounds/mb-bg-fb-16.png'} />
      </div>
    </div>
      <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/noun_Compus_1896181.svg')}
        title="OUR PURPOSE"
        text="To help individuals, teams and companies embrace agility and get to better business results by being more effective, improving engagement, lowing cost and enabling faster delivery. We take a holistic approach to serve and uplift your own capability so that we leave you with the skills embedded"         
        />

      <SectionCaption>Latest Blog Posts</SectionCaption>
        <SectionCellGroup>
          {posts.map(({ node }) => {
              const title = node.blog || node.slug
              console.log(node.abstract.json)
              return (
                <div key={node.slug}>
                      <Link style={{ boxShadow: `none` }} to={node.slug}>
                        <Cell title={title} />
                      {documentToReactComponents(node.abstract.json, options)}
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
    allContentfulBlog(limit: 1, sort: {fields: date, order: DESC}, filter: {date: {ne: null}}) {
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
