"use strict";
const request = require("superagent");
class Util {
    constructor() {
    }
    get_short_url({ google_key, long_url }) {
        let data = {
            longUrl: long_url
        };
        let url = `https:\/\/www.googleapis.com/urlshortener/v1/url?key=${google_key}`;
        console.log(url);
	console.log(data);
        return request.post(url).send(data);

    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Util;
