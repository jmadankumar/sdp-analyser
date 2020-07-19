import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import loadable from "@loadable/component"
import cx from "classnames"
import SdpEditor from "../components/SdpEditor"
import ScrollUp from "react-scrollup-lite"
const SdpAnalyserLoadable = loadable(() => import("../components/SdpAnalyser"))

const IndexPage = ({ data }) => {
  const [sdpText, setSdpText] = useState("")

  const handleSdpTextChange = text => {
    setSdpText(text)
  }

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <div className="w-full h-full overflow-hidden bg-gray-800">
        <div className="flex flex-wrap -mx-8 px-8">
          <section
            id="sdp-input-section"
            className={cx("w-full md:w-1/2 px-4")}
          >
            <SdpEditor
              className="editor"
              text={sdpText}
              onChange={handleSdpTextChange}
            />
          </section>
          <section
            id="sdp-output-section"
            className={cx("w-full md:w-1/2 w-1/2 px-4")}
          >
            <SdpAnalyserLoadable text={sdpText} className="editor" />
          </section>
        </div>
      </div>
      <ScrollUp
        startPosition={0}
        showAtPosition={200}
        position="right"
        style={{ right: "20px" }}
      >
        <button className="w-10 h-10 rounded-full bg-purple-500 text-white flex justify-center items-center outline-none">
          <svg
            width="40"
            height="40"
            viewBox="0 0 43.3 55.8"
            enable-background="new 0 0 43.3 55.8"
            className="w-6 h-6"
          >
            <polygon
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="currentColor"
              points="40.9,19.8 40.9,31 26.1,16.3 26.1,55.3 17.4,55.3 
	17.4,16.3 2.6,31 2.6,19.8 21.7,0.7 "
            />
          </svg>
        </button>
      </ScrollUp>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default IndexPage
