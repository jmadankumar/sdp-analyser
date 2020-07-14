import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="h-12 flex items-center bg-indigo-500"
  >
    <div
      className="px-4"
    >
      <h1 className="m-0">
        <Link
          to="/"
         className="text-white no-underline"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
