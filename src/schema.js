import { schema } from 'normalizr';

const track = new schema.Entity('tracks');
const artist = new schema.Entity('artists');
const tag = new schema.Entity('tags');
const curation = new schema.Entity('curations', {
  tracks: [track],
  tags: [tag],
});
const curationList = [curation];
const trackList = [track];

export { track, artist, tag, curation, curationList, trackList };
