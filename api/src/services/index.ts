import { Application } from '../declarations';
import user from './user/user.service';
import item from './item/item.service';
import product from './product/product.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(user);
  app.configure(item);
  app.configure(product);
}
