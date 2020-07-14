import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as sdpTransform from 'sdp-transform';
import ReactJson from 'react-json-view';
import { Controlled as CodeMirror } from 'react-codemirror2';
import cx from 'classnames';
import Button from "../components/Button";
const sdpStr = "v=0\r\n\
o=UniMRCPServer 1212606071011504954 4868540303632141964 IN IP4 192.168.88.136\r\n\
s=-\r\n\
c=IN IP4 192.168.88.136\r\n\
t=0 0\r\n\
m=application 1544 TCP/MRCPv2 1\r\n\
a=setup:passive\r\n\
a=connection:new\r\n\
a=channel:1228fd00945a4963@speechsynth\r\n\
a=cmid:1\r\n\
m=audio 5860 RTP/AVP 0\r\n\
a=rtpmap:0 PCMU/8000\r\n\
a=sendonly\r\n\
a=mid:1\r\n\
";
const IndexPage = ({ data }) => {
  const [sdpText, setSdpText] = useState('');
  const [sdpOutput, setSdpOutput] = useState({});

  const [isJsonViewerVisibile, setJsonViewerVisible] = useState(false);
  const [isAnalyserVisibile, setAnalyserVisible] = useState(false);
  console.log(data);

  const handleAnalyse = () => {
    setJsonViewerVisible(false);
    setAnalyserVisible(true);
    if (sdpText) {
      let res = removeSpecialCharFromObject(sdpTransform.parse(sdpText));
      setSdpOutput(res);
    }
  }
  const removeSpecialCharFromObject = (res) => {
    if (typeof res === 'string') {
      res = res.replace('\\r\\n\\', "");
    } else if (res instanceof Array) {
      for (let i = 0; i < res.length; i++) {
        res[i] = removeSpecialCharFromObject(res[i]);
      }

    } else if (typeof res === 'object') {
      for (let key of Object.keys(res)) {
        const value = res[key];
        res[key] = removeSpecialCharFromObject(value);
      }
    }
    return res;
  }
  const handleConvertToJSON = () => {
    setJsonViewerVisible(true);
    setAnalyserVisible(false);
    if (sdpText) {
      let res = sdpTransform.parse(sdpText);
      res = removeSpecialCharFromObject(res);
      setSdpOutput(res);
    }
  }
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title} />

      <div className="w-full h-full overflow-hidden  bg-gray-800">
        <div className="flex px-8 h-16 justify-between items-center mb-5">
          <div className="text-2xl text-white"> SDP Parser and Analyser</div>
          <div>
            <Button onClick={handleConvertToJSON} className="mr-2">
              Convert to JSON
            </Button>
            <Button onClick={handleAnalyse}>
              Analyse
            </Button>
          </div>
        </div>

        <div className="flex -mx-8 px-8">
          <section id="sdp-input-section"
            className={
              cx("w-1/2 px-4",
                { "w-full": !isJsonViewerVisibile && !isAnalyserVisibile }
              )}>
            <div className="text-center text-white p-2">Paste SDP here</div>
            <div className="editor bg-gray-900 outline-none">
              <CodeMirror
                value={sdpText}
                options={{
                  mode: 'text',
                  theme: 'material',
                  lineNumbers: true
                }}
                onBeforeChange={(editor, data, value) => {
                  setSdpText(value)
                }}
                onChange={(editor, data, value) => {
                  setSdpText(value)
                }}
              />
            </div>
          </section>
          <section id="sdp-output-section"
            className={cx("w-1/2 px-4",
              { hidden: !isJsonViewerVisibile && !isAnalyserVisibile }
            )} >
            <div className="text-center text-white p-2">{isJsonViewerVisibile ? "SDP JSON" : "SDP analyser"}</div>
            <div className="editor bg-gray-100 p-8 outline-none overflow-y-auto">
              <div id="sdp-text-input"
                className="w-full h-full bg-transparent border-0 "
              >
                {isJsonViewerVisibile &&
                  <ReactJson
                    src={sdpOutput}
                    displayDataTypes={false}
                    displayObjectSize={false} />
                }
              </div>
            </div>
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
