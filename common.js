'using strict';

var ethUtil = require('ethereumjs-util');
var config = require('./config')
var http = require('https');

/**
 * If a url is facebook, gist or not?
 * @param {*} url 
 */
function checkUrl(url) {
    if (!url) {
        return false;
    }
    url = url.trim();
    var urlPattern = new RegExp('(^http[s]?:\/\/www.)((facebook\.com)|(gist\.github\.com))(\/\.+\/.+)(.+)$');
    var rs = urlPattern.test(url);

    return rs;
}

/**
 * Extract ethereum address from a text content
 * @param {*} content 
 */
function extractAddressFromText(content) {
    if (!content || content.length > 1000 || typeof content !== 'string') {
        return null;
    }
    var addrPattern = new RegExp('0x[a-fA-F0-9]{40}');
    var addrIndex = content.search(addrPattern);
    console.log('content ', content);
    console.log('index ', addrIndex);
    if (addrIndex < 0) {
        return null;
    }
    var addr = content.substr(addrIndex, 42);
    if (!ethUtil.isValidAddress(addr)) {
        return null;
    }

    return addr;
}

function getAddressFromGist(url, cb) {
    var idx = url.lastIndexOf('/', url);
    var id = url.substring(idx + 1, url.length);
    
    var options = {
        host: config.gist.host,
        path: `${config.gist.path}${id}`,
        headers: { 'User-Agent': 'faucet/0.1' }
    };

    http.get(options, function (res) {
        if (!res || res.statusCode != 200) {
            return cb('server not response or status is not 200');
        }
        res.setEncoding('utf8');
        var rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            var addr;
            try {
                var parsedData = JSON.parse(rawData);
                for(var f in parsedData.files) {
                    var first = parsedData.files[f];
                    if(first.content) {
                        addr = extractAddressFromText(first.content);
                        break;
                    }
                }
            } catch (e) {
                cb('Response data is not a JSON object')
            }
            cb(null, addr)
        });
    }).on('error', (e) => {
        cb('Can not request to server');
    });
}

module.exports = {
    checkUrl: checkUrl,
    extractAddressFromText: extractAddressFromText,
    getAddressFromGist: getAddressFromGist
}