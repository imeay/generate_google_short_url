import * as supertest from 'supertest';
import { server } from '../index';
import * as mocha from 'mocha';
import * as assert from 'assert';
const request = supertest(server);

describe('google_short_url', function () {
    describe('GET /', function () {
        it('msg is ok', function () {
            request.get('/').then( response => {
                assert(response.body.msg, 'ok');
            })
        });
    });
    describe('GET /short_url', function () {
        it('should return 200', function (done) {
            request.get('/short_url?long_url=https://baidu.com').expect(200, done);
        });
    });
    describe('GET /short_url', function () {
        it('should add params', function (done) {
            request.get('/short_url').expect(200, done);
        });
    });
});

