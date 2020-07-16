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

const Layout = ({ children, showHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {showHeader && <Header siteTitle={data.site.siteMetadata.title} />}
      <div
        className="content"
      >
        <main className="main">{children}</main>
        <footer className="text-center text-white">
          <p>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
          <p>
            Made with by <span className="text-red-500 text-xl">&hearts;</span> <a href="https://github.com/jmadankumar">Madan</a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
