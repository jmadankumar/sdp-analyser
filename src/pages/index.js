import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import loadable from '@loadable/component'
import cx from 'classnames';
import SdpEditor from "../components/SdpEditor";

const SdpAnalyserLoadable = loadable(() => import('../components/SdpAnalyser'))

const IndexPage = ({ data }) => {
  const [sdpText, setSdpText] = useState('');

  const handleSdpTextChange = (text) => {
    setSdpText(text);
  }

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />
      <div className="w-full h-full overflow-hidden bg-gray-800">
        <div className="flex -mx-8 px-8">
          <section id="sdp-input-section" className={cx("w-1/2 px-4")}>
            <div className="text-white text-center p-2">Paste SDP here</div>
            <SdpEditor className="editor" text={sdpText} onChange={handleSdpTextChange} />
          </section>
          <section id="sdp-output-section" className={cx("w-1/2 px-4")} >
            <div className="text-center text-white p-2">SDP JSON output</div>
            <SdpAnalyserLoadable text={sdpText} className="editor" />
          </section>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export default IndexPage
