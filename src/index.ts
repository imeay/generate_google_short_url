import * as Koa from 'koa';
import * as Router from 'koa-router';
import Util from './service';

const app = new Koa();
const router = Router();
const util = new Util();
const google_key = 'AIzaSyD90xnfp2BYWss6tf9NrnCCXE3DfVeB7J4';

router.get('/', async function(ctx, next) {
   ctx.body = {
     msg : 'ok'
   };
});

router.get('/short_url', async function(ctx, next) {
   let long_url = ctx.query.long_url || '';
   let { body } = await util.get_short_url({google_key, long_url});
   ctx.body = {
     short_url : body.id
   };
});

app.use(router.routes(), router.allowedMethods());

export const server = app.listen(1234, () => {
  console.log('listen 1234');
});


