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
        <SEO title="Agility Systems" />
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
      <h2>Focus Areas - we specialise in</h2>
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
            text="Swtich operating model"
            image={'https://rmwc.io/images/backgrounds/mb-bg-fb-03.png'} />
          <Card 
            title="Learning"
            text="Training, coaching and mentoring"
            image={'https://rmwc.io/images/backgrounds/mb-bg-fb-03.png'}
           />
          <Card 
            title="Quick Cover"
            text="Provide expert resource at short notice"
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


  { <div className="Cards">
      <h2>Case Studies</h2>
      <div className="CardGroup">
          <Card 
            title="Decipher"
            text="Agility Systems helped us with scaling and customer research. We learnt heaps and feel we are set up for success - Matt Steward, Development Manager"
            image={require('../images/Decipher-Logo.svg')} />
          <Card 
            title="RAC"
            text="The AS team run a fantastic two day alignment and agile training session for the team. Took the time to customise and make sure the content matched our needs - Charlote T, Agile Coach"
            image={require('../images/RAC-wa-logo.png')} />
          <Card 
            title="Pfizer"
            text="We where rolling out a lean program and AS helped us empower the teams to be part of the process. Great to see agile applied so well in a manufacturing environment - Matt"
            image={require('../images/Pfizer_logo.svg')} />
      </div>
    </div>}

    {/* <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/noun_webinar_2336034 blue.svg')}
      title="TRAINING"
      text="We provide ready-to-go courses. We can also customise training specifically to meet your needs. Group packages for in-house training are also possible. If you want to explore these options feel free to get in touch."               
      /> */}

      <div>
        <h3>Training</h3>
        <img src={require('../images/noun_webinar_2336034 blue.svg')} />
        <p>Below are the ready-to-go courses we currently have on offer. We can also customise training specifically to meet your needs. Group packages for in-house training are also possible. If you want to explore these options feel free to get in touch.</p>
        <ul>
          <li>Agile Essentials</li>
          <li>Product Ownership</li>
          <li>Agile Leadership</li>
          <li>Extreme User Story Splitting</li>
          <li>LeSS Large Scaled Scrum</li>
          <li>SAFe 4.6</li>
        </ul>
        
      </div>

<div className="Cards">
      <h2>Who We Are</h2>
      <div className="CardGroup">
          
        <div>
          <img src={require('../images/steve2.png')} alt="Steve Barret" />
          <h3>Steve Barret<br />ICE-AC, ICP-ACC, ICP-ATF, CSP-SM, CSM, PSM I, PSPO I, CLP</h3>
          <p>Steve is an experienced Scrum Master and Agile Coach who can help organisations and teams embrace agility and create the right environment to support their journey towards high performance.<br />
            Contact Steve at steve.barrett@agilitysystems.coach</p>
        </div>

        <div>
        <img src={require('../images/jeanne-armstrong.png')} alt="Jeanne Armstrong" />
          <h3>Jeanne Armstrong<br/>Enterprise Coach</h3>
          <p>Jeanne has extensive experience as a software development and delivery manager in Silicon Valley hi-tech industries. As an early adopter of Agile and Lean she lead efforts to transform development teams and divisions to agile ways of working.<br/>
          Contact Jeanne at jeanne.armstrong@agilitysystems.coach </p>
        </div>

        <div>
        <img src={require('../images/will-agility-systems.png')} alt="Will Webster" />
          <h3>Will Webster<br/>CSM, CLP, MCSD</h3>
          <p>Will has a technical background with a passion for building high performing teams and great products. He has effective collaboration skills and strategies for boasting productivity.<br/>
          Contact Will at will.webster@agilitysystems.coach </p>
        </div>

      </div>
    </div>

      <SectionCaption>Latest Blog Post</SectionCaption>
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
