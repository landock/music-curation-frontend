import { reducerCallback } from '.';

it('SearchCurationsResults: default', () => {
  const curations = { 1: { id: 1 } };
  const mockStore = {
    SearchCurations: { entities: { curations } },
  };
  const result = reducerCallback({}, mockStore);

  expect(result).toHaveProperty('curations');
  expect(result.curations).toMatchObject(curations);
});
