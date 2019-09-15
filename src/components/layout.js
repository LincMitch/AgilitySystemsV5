/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import "./layout.css"
// import { all } from "q"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ContentFulQuery {
      allContentfulLink(sort: {fields: [createdAt], order: ASC }) {
        edges {
          node {
            title
            url
            createdAt
          } 
        }
      }
      allContentfulPage {
        edges {
          node {
            richtext {
              json
            }
          }
        }
      }
    }
  `)
// console.log(data.allContentfulPage.edges[1].node.richtext.json)

  return (
    <>
      <Header/>
      <main>
        {children}
        {documentToReactComponents(data.allContentfulPage.edges[1].node.richtext.json)}

      </main>
      <Footer data={data} >
        Footer text goes here
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
