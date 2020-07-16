import React from 'react';

const Analyser = ({ data }) => {
    return (
        <div>
            <div>Session Description</div>
            <div>
                <div>Protocol Version</div>
                <div>{data.version}</div>
                <div>Session Id</div>
                <div>{data.origin?.sessionId}</div>
                <div>session version</div>
                <div>{data.origin?.sessionVersion}</div>
                <div>Ip version</div>
                <div>{data.origin?.ipVer}</div>
                <div>Address</div>
                <div>{data.origin?.address}</div>
            </div>
            <div>Time Description</div>
            <div>
                <div>Start</div>
                <div>{data.timing?.start}</div>
                <div>stop</div>
                <div>{data.timing?.stop}</div>
            </div>
            <div>Media Description</div>
        </div>
    );
}

export default Analyser;