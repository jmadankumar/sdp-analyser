import React from "react"
import { Controlled as CodeMirror } from "react-codemirror2"
import cx from "classnames"
import { processRawSdpText } from "../utils/sdp.util"
import { SAMPLE_SDP } from "../config/constants"

const SdpEditor = ({ className, onChange, text }) => {
  const handleEditorChange = value => {
    const processedText = processRawSdpText(value)
    onChange(processedText)
  }
  return (
    <>
      <div className="flex justify-between  p-2">
        <div className="text-white">Paste SDP here</div>
        <div
          className="text-green-500 border-b border-green-500 cursor-pointer"
          onClick={() => handleEditorChange(SAMPLE_SDP)}
        >
          Fill sample sdp
        </div>
      </div>
      <div className={cx("bg-gray-900", className)}>
        <CodeMirror
          value={text}
          options={{
            mode: "text",
            theme: "material",
            lineNumbers: true,
          }}
          onBeforeChange={(editor, data, value) => {
            handleEditorChange(value)
          }}
        />
      </div>
    </>
  )
}

export default SdpEditor
