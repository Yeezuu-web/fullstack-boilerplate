"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasUserAgent = void 0;
var hasUserAgent = function (req) {
    var ua = req.headers['user-agent'];
    var result = {};
    switch (true) {
        case /mobile/i.test(ua):
            result['mobile'] = true;
            break;
        case /Windows NT/.test(ua):
            result['windows'] = true;
            break;
        case /Linux/.test(ua):
            result['linux'] = true;
            break;
        default:
            result['other'] = true;
            break;
    }
    return result;
};
exports.hasUserAgent = hasUserAgent;
// https://wicg.github.io/ua-client-hints/
//# sourceMappingURL=has-user-agent.js.map