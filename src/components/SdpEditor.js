import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import cx from 'classnames';
import { processRawSdpText } from '../utils/sdp.util';

const SdpEditor = ({ className, onChange, text }) => {
    const handleEditorChange = (value) => {
        const processedText = processRawSdpText(value);
        onChange(processedText);
    }
    return (
        <div className={cx("bg-gray-900", className)}>
            <CodeMirror
                value={text}
                options={{
                    mode: 'text',
                    theme: 'material',
                    lineNumbers: true
                }}
                onBeforeChange={(editor, data, value) => {
                    handleEditorChange(value)
                }}
            />
        </div>
    );
}

export default SdpEditor;