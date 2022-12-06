import assert from 'assert';
import app from '../../src/app';

describe('\'item\' service', () => {
  it('registered the service', () => {
    const service = app.service('item');

    assert.ok(service, 'Registered the service');
  });
});
