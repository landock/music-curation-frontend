var faker = require('faker');

function n(callback, lengthToGenerate) {
  let items = [];
  for (let i = 0; i < lengthToGenerate; i += 1) {
    items.push(callback());
  }
  return items;
}

function createTag() {
  return {
    id: faker.random.number(9999),
    title: faker.random.word(),
  };
}

function createCuration(id) {
  return {
    id: id ? parseInt(id, 10) : faker.random.number(9999),
    imageUrl: 'http://fpoimg.com/200x200',
    description: faker.hacker.phrase(),
    tracks: n(createTrack, faker.random.number(20)),
    name: faker.fake('{{commerce.productAdjective}} {{address.streetName}}'),
  };
}

function createTrack() {
  return {
    id: faker.random.number(9999),
    imageUrl: 'http://fpoimg.com/100x100',
    artistName: faker.name.findName(),
    trackName: faker.company.bs(),
    durationInSeconds: faker.random.number(99999),
    recordLabels: n(faker.company.companyName, faker.random.number(3)),
  };
}

module.exports = { n, createTag, createCuration, createTrack };
