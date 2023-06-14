const logger = require('./logger');

describe('Logger Middleware', () => {
  let consoleOutput = [];
  const mockedLog = (output) => consoleOutput.push(output);

  beforeEach(() => {
    consoleOutput = [];
    console.log = mockedLog;
  });

  it('should log the request method and path', () => {
    const req = { method: 'GET', path: '/test' };
    const res = {};
    const next = jest.fn();

    logger(req, res, next);

    expect(consoleOutput.length).toBe(1);
    expect(consoleOutput[0]).toContain('[GET] /test');
    expect(next).toHaveBeenCalled();
  });
});