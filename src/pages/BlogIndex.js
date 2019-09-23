import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allContentfulBlog.edges

    const options = {
      renderNode: {
        "embedded-asset-block": node => {
          return (
            <img src={node.data.target.fields.file["en-US"].url} />
          )
        }
      }
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        {/* <Bio /> */}
        {posts.map(({ node }) => {
          const title = node.blog || node.slug
          return (
            <div key={node.slug}>
                  <Link style={{ boxShadow: `none` }} to={node.slug}>
                    {title}
                  </Link>
                {/* {documentToReactComponents(node.abstract.json)} */}
                {documentToReactComponents(data.allContentfulPage.edges[1].node.richtext.json, options)}

            </div>
          )
        })}
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
