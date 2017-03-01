import * as request from 'superagent';

export default class Util {
  constructor() {
    //
  }
  get_short_url({google_key, long_url}) {
    let data = {
      longUrl : long_url
    };
    let url = `https:\/\/www.googleapis.com/urlshortener/v1/url?key=${google_key}`;
    return request.get(url).send(data);
  }
}
