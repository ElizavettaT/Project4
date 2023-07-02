const formHandler = require('../../../src/client/js/formHandler');

describe('Test formHandler', () => {
  test('should be a function', () => {
    expect(typeof formHandler).toBe("object");
  });
})