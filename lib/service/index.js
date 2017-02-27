"use strict";
const request = require("superagent");
class Util {
    constructor() {
    }
    get_short_url({ key, long_url }) {
        let data = {
            longUrl: long_url
        };
        return request.post(`https://www.googleapis.com/urlshortener/v1/url?key=${key}`)
            .send(data);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Util;
