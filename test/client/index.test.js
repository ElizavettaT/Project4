const index = require('../../src/client/index.js');

describe('Test Client - index.js', () => {
  test('should have two methods', () => {
    expect(index).toMatchObject({
      checkForName: expect.any(Function),
      handleSubmit: expect.any(Function)
    });
  });
})