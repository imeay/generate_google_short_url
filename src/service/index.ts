import * as request from 'superagent';
import { GOOGLE_KEY } from '../config';
export default class Google_Service {
  constructor() {
    //
  }
  get_short_url(long_url) {
    let data = {
      longUrl : long_url
    };
    let url = `https:\/\/www.googleapis.com/urlshortener/v1/url?key=${GOOGLE_KEY}`;
    return request.post(url).send(data);
  }
}
