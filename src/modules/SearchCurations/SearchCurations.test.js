import reducer, { types, actions } from '.';

describe('SearchCurations Reducer', () => {
  it('should return empty state object if undefined state passed in', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
});
