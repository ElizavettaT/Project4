
const { checkForName } = require('../../../src/client/js/nameChecker');

describe('Test nameChecker', () => {
  test('should return false if article is empty', () => {
    global.alert = jest.fn();
    const result = checkForName('')
    expect(global.alert).toHaveBeenCalledTimes(1)
    expect(result).toBe(false)
  });

  test('should return true if article is filled', () => {
    global.alert = jest.fn();
    const result = checkForName('ABC')
    expect(global.alert).toHaveBeenCalledTimes(0)
    expect(result).toBe(true)
  });
})