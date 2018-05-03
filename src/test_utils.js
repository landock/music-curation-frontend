import faker from 'faker';

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
    id: faker.random.number(1000),
    imageUrl: faker.image.image(),
    tracks: [
      {
        id: faker.random.number(),
        imageUrl: faker.image.image(),
        artistName: faker.name.findName(),
        trackName: faker.random.words(),
      },
      {
        id: faker.random.number(),
        imageUrl: faker.image.image(),
        artistName: faker.name.findName(),
        trackName: faker.random.words(),
      },
    ],
    name: faker.fake('{{commerce.productAdjective}} {{address.streetName}}'),
  };
}

export { n, createTag, createCuration };
