var faker = require('faker');
var testUtils = require('../../src/test_utils');

module.exports = {
  tracks: testUtils.n(testUtils.createTrack, 30),
  curations: testUtils.n(testUtils.createCuration, 80),
  tags: testUtils.n(testUtils.createTag, 20),
};
