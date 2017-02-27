"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Koa = require("koa");
const Router = require("koa-router");
const service_1 = require("./service");
const app = new Koa();
const router = Router();
const util = new service_1.default();
const google_key = 'AIzaSyD90xnfp2BYWss6tf9NrnCCXE3DfVeB7J4';
router.get('/short_url', function (ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let long_url = ctx.query.long_url;
        let { text } = yield util.get_short_url({ google_key, long_url });
        ctx.body = {
            short_url: text.id
        };
    });
});
app.use(router.routes(), router.allowedMethods());
app.listen(8888);
