var faker = require('faker');
var testUtils = require('../../src/test_utils');

module.exports = {
  tracks: testUtils.n(testUtils.createTrack, 300),
  curations: testUtils.n(testUtils.createCuration, 800),
  tags: testUtils.n(testUtils.createTag, 200),
};
