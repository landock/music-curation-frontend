import generateKeyFromObjectWithIds from './generateKeyFromObjectWithIds';

it('should return a string of the ids separated by an underscore, in ascending order', () => {
  const idOne = 1;
  const idTwo = 5;
  const expectedResult = `${idOne}_${idTwo}`;
  const ids = [{ id: idTwo }, { id: idOne }];
  const result = generateKeyFromObjectWithIds(ids);

  expect(result).toBe(expectedResult);
});
