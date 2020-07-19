import React from "react"
import ReactJson from "react-json-view"
import cx from "classnames"
import { transformSdpToJSON } from "../utils/sdp.util"
import { CopyToClipboard } from "react-copy-to-clipboard";

const SdpAnalyser = ({ className, text }) => {
  const sdpOutput = transformSdpToJSON(text)
  const fieldsToExtend = ["root", "origin", "timing", "media"]
  const shouldCollapse = field => {
    return fieldsToExtend.indexOf(field.name) === -1
  }
  return (
    <>
      <div className="flex justify-between  p-2">
        <div className="text-white">SDP JSON output</div>
        <CopyToClipboard text={JSON.stringify(sdpOutput)}>
          <div className="text-green-500 border-b border-green-500 cursor-pointer">Copy</div>
        </CopyToClipboard>
      </div>
      <div
        className={cx(
          "bg-gray-100 p-8 outline-none overflow-y-auto",
          className
        )}
      >
        <ReactJson
          src={sdpOutput}
          displayDataTypes={false}
          displayObjectSize={false}
          shouldCollapse={shouldCollapse}
        />
      </div>
    </>
  )
}
export default SdpAnalyser
