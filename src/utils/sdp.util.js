import sdpTransform from 'sdp-transform';

export const processRawSdpText = (sdp) => {
    if (sdp) {
        return sdp.split('\\r\\n').join("\r\n")
    }
    return sdp;
}

export const removeSpecialCharFromObject = (res) => {
    if (typeof res === 'string') {
        res = res.replace('\\r\\n', "");
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

export const transformSdpToJSON = (sdp) => {
    if (sdp) {
        let res = sdpTransform.parse(sdp.split('\\r\\n').join('\r\n'));
        res = removeSpecialCharFromObject(res);
        return res;
    }
    return {};
}