// Initializes the `product` service on path `/product`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Product } from './product.class';
import createModel from '../../models/product.model';
import hooks from './product.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'product': Product & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/product', new Product(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('product');

  service.hooks(hooks);
}
