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
    id: faker.random.number(1000),
    title: faker.random.word(),
  };
}
function createPublicationStatus() {
  return {
    created_at: faker.date.recent(),
    updated_at: faker.date.soon(),
    scheduled_at: faker.date.future(1),
    environment: ['development'],
  };
}

function createCuration() {
  return {
    id: faker.random.number(9999),
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
    durationInSeconds: faker.random.number(999999),
    recordLabels: n(faker.company.companyName, faker.random.number(3)),
  };
}

module.exports = { n, createTag, createCuration, createTrack };
