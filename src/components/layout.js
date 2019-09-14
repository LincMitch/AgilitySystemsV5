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
import "./layout.css"
import { all } from "q"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allContentfulLink(sort: { fields: [createdAt], order: ASC}){
        edges{
          node{
            title
            url
            createAt
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
        <main>
          {children}
          </main>
        <Footer data={data}>
          Some footer text
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
