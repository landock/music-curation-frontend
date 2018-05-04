import faker from 'faker';
import * as testUtils from '../test_utils';

const curation = testUtils.createCuration();
const curations = {
  curations: testUtils.n(testUtils.createCuration, faker.random.number(10)),
};
const tag = testUtils.createTag();
const tags = testUtils.n(testUtils.createTag, faker.random.number(50));

export { curation, curations, tag, tags };
