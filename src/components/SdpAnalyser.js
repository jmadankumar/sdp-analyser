import React from 'react';
import ReactJson from 'react-json-view';
import cx from 'classnames';
import { transformSdpToJSON } from '../utils/sdp.util';

const SdpAnalyser = ({ className, text }) => {
    const sdpOutput = transformSdpToJSON(text);
    const fieldsToExtend = ['root', 'origin', 'timing', 'media'];
    const shouldCollapse = (field) => {
        return fieldsToExtend.indexOf(field.name) === -1;
    }
    return (
        <div className={cx("bg-gray-100 p-8 outline-none overflow-y-auto", className)}>
            <ReactJson
                src={sdpOutput}
                displayDataTypes={false}
                displayObjectSize={false}
                shouldCollapse={shouldCollapse}
            />
        </div>
    );
}
export default SdpAnalyser;