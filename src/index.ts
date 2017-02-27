import * as Koa from 'koa';
import * as Router from 'koa-router';
import Util from './service';

const app = new Koa();
const router = Router();
const util = new Util();
const google_key = 'AIzaSyD90xnfp2BYWss6tf9NrnCCXE3DfVeB7J4';

router.get('/short_url', async function(ctx, next) {
   let long_url = ctx.query.long_url;
   let {text} = await util.get_short_url({google_key, long_url});
   ctx.body = {
     short_url : text.id
   };
});

app.use(router.routes(), router.allowedMethods());

app.listen(8888);

