"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("superagent");
class Util {
    constructor() {
        //
    }
    get_short_url({ google_key, long_url }) {
        let data = {
            longUrl: long_url
        };
        let url = `https:\/\/www.googleapis.com/urlshortener/v1/url?key=${google_key}`;
        return request.post(url).send(data);
    }
}
exports.default = Util;
