import history from './history';

it('should create a singleton object with this shape', () => {
  expect(history).toMatchObject({
    length: expect.any(Number),
    action: expect.any(String),
    location: expect.any(Object),
    createHref: expect.any(Function),
    push: expect.any(Function),
    replace: expect.any(Function),
    go: expect.any(Function),
    goBack: expect.any(Function),
    goForward: expect.any(Function),
    block: expect.any(Function),
    listen: expect.any(Function),
  });
});
