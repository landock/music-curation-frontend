import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { faker } from '@faker-js/faker';

const app = new Hono();

app.use('*', cors());

function n(callback, length) {
  return Array.from({ length }, callback);
}

function createTag() {
  return {
    id: faker.number.int(9999),
    title: faker.word.sample(),
  };
}

function createTrack(id) {
  return {
    id: id ? parseInt(id, 10) : faker.number.int(9999),
    imageUrl: 'http://fpoimg.com/100x100',
    artistName: faker.person.fullName(),
    trackName: faker.music.songName(),
    durationInSeconds: faker.number.int(99999),
    tags: n(createTag, faker.number.int({ min: 1, max: 20 })),
    recordLabels: n(() => faker.company.name(), faker.number.int({ min: 1, max: 5 })),
  };
}

function createCuration(id) {
  return {
    id: id ? parseInt(id, 10) : faker.number.int(9999),
    imageUrl: 'http://fpoimg.com/200x200',
    description: faker.hacker.phrase(),
    tracks: n(createTrack, faker.number.int({ min: 1, max: 25 })),
    tags: n(createTag, faker.number.int({ min: 1, max: 20 })),
    name: `${faker.commerce.productAdjective()} ${faker.location.street()}`,
  };
}

app.get('/curations', (c) => {
  return c.json(n(createCuration, faker.number.int({ min: 10, max: 40 })));
});

app.get('/curations/:id', (c) => {
  return c.json(createCuration(c.req.param('id')));
});

app.get('/searchCurations/:searchTerms', (c) => {
  return c.json(n(createCuration, faker.number.int({ min: 10, max: 40 })));
});

app.get('/tags', (c) => {
  return c.json(n(createTag, faker.number.int({ min: 1, max: 20 })));
});

app.get('/search/:whatever', (c) => {
  return c.json(n(createTrack, 10));
});

app.get('/tracks/:id', (c) => {
  return c.json(createTrack(c.req.param('id')));
});

export default app;
