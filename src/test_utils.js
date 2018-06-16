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
    tracks: n(createTrack, faker.random.number({ min: 1, max: 25 })),
    tags: n(createTag, faker.random.number({ min: 1, max: 20 })),
    name: faker.fake('{{commerce.productAdjective}} {{address.streetName}}'),
  };
}

function createTrack(id) {
  return {
    id: id ? parseInt(id, 10) : faker.random.number(9999),
    imageUrl: 'http://fpoimg.com/100x100',
    artistName: createName(),
    trackName: createName(),
    durationInSeconds: faker.random.number(99999),
    tags: n(createTag, faker.random.number({ min: 1, max: 20 })),
    recordLabels: n(
      faker.company.companyName,
      faker.random.number({ min: 1, max: 5 })
    ),
  };
}

function createName() {
  let nameFunctions = [
    faker.commerce.productName(),
    faker.company.companyName(),
    faker.name.title(),
    faker.name.findName(),
    faker.company.catchPhraseDescriptor(),
    faker.company.catchPhraseNoun(),
  ];

  return faker.random.arrayElement(nameFunctions);
}

module.exports = { n, createTag, createCuration, createTrack, createName };
