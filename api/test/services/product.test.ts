import assert from 'assert';
import app from '../../src/app';

describe('\'product\' service', () => {
  it('registered the service', () => {
    const service = app.service('product');

    assert.ok(service, 'Registered the service');
  });
});
