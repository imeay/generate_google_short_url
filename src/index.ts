import * as querystirng from 'querystring';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as pino from 'koa-pino-logger';
import Google_Service from './service';
import * as fs from 'fs';
import * as tee  from 'pino-tee';
import validator, {
  object,
  string,
} from 'koa-context-validator';

const app = new Koa();
const router = Router();
const google_service = new Google_Service();
const stream = tee(process.stdin);

stream.tee(fs.createWriteStream('errors'), line => line.level >= 50);
stream.pipe(process.stdout);
app.use(logger());
app.use(pino({},stream));
app.use( async function(ctx, next) {
  try {
    await  next();
  } catch(e) {
    let msg = '服务器错误';
    let message = e.message || e.msg;
    ctx.body = {
      msg : message,
      code : e.code || 9999,
      data : null
    }
  }
});

router.get('/', async function(ctx, next) {
  ctx.body = {
    msg : 'ok',
    data : null,
    code : 200
  };
});

router.get('/short_url', validator({
  query : object().keys({
    long_url : string().required()
  })}), 
  async function(ctx, next) {
   let long_url = ctx.query.long_url;
   let { body } = await google_service.get_short_url(long_url);
   ctx.body = {
     msg : '',
     data : {
       short_url : body.id
     },
     code : 200
   };
});

app.use(router.routes(), router.allowedMethods());

export const server = app.listen(1234, () => {
  console.log('listen 1234');
});


