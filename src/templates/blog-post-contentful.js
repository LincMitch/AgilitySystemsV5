import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

class BlogPostContentfulTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlog
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
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

    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.title}
          description={post.title || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginBottom: 0,
              }}
            >
              {post.blog}
            </h1>
            <p
              style={{
                display: `block`,
              }}
            >
              {post.date}
            </p>
          </header>
          <section>
            {documentToReactComponents(post.richText.json, options)}
          </section>
          <hr />
          <footer>
            {/* <Bio /> */}
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulBlog( slug: {eq: $slug}) {
      blog
      date
      richText {
        json
      }
    }
  }
`
