const validator = require('./validator');




describe('Validator Middleware', () => {
  const req = { query: {} };
  const res = {};
  const next = jest.fn();

  it('should call next() if name is provided in the query string', () => {
    req.query.name = 'John';
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });
  it('should call next() with an error message if name is not provided in the query string', () => {
    const req = { query: {} };
    const res = {};
    const next = jest.fn();
  
    validator(req, res, next);
  
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(expect.any(Error));
    const error = next.mock.calls[0][0];
    expect(error.message).toBe('No name provided');
    expect(error.statusCode).toBe(500);
  });
  


});