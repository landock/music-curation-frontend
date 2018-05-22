const express = require('express');
const uid = require('uid');

const app = express();

const curations = [
  {
    "id": 1,
    "type": 1,
    "name": "Morning Workout",
    "description": "The EXE circuit is down, reboot the redundant firewall so we can input the HDD microchip",
    "imageUrl": "https://cdn.muscleandstrength.com/sites/all/themes/mnsnew/images/taxonomy/workouts/bicep.jpg",
    "tracks": [
      {
        "id": 1,
        "externalId": "54219314",
        "artistName": "Drake",
        "trackName": "One Dance",
        "durationInSeconds": 174,
        "streamUrl": "http://www.dev.com/api/Track/Stream?trackId=54219314",
        "imageUrl": "https://placeimg.com/200/200/people/grayscale"
      }
    ]
  },
    {
    "id": 2,
    "type": 1,
    "name": "Evening Chill",
    "description": "Use the solid state RSS sensor, then you can synthesize the auxiliary sensor!",
    "imageUrl": "https://placeimg.com/400/250/any",
    "tracks": [
      {
        "id":33,
        "externalId": "54215685",
        "artistName": "Todd Glass",
        "trackName": "Glass Chins",
        "durationInSeconds": 174,
        "streamUrl": "http://www.dev.com/api/Track/Stream?trackId=54219314",
        "imageUrl": "https://placeimg.com/200/200/tech/grayscale"
      },
      {
        "id":35,
        "externalId": "54215855",
        "artistName": "Sean Price",
        "trackName": "Train Aspirin",
        "durationInSeconds": 174,
        "streamUrl": "http://www.dev.com/api/Track/Stream?trackId=54219314",
        "imageUrl": "https://placeimg.com/200/200/tech/grayscale"
      }
    ]
  }
];

// Default JSON content type
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type",'application/json');
  next();
});

app.get('/curations', (req, res) => {
  res.json(curations);
});


app.listen(3001, () => console.log('Music Curations API is listening on :3001'));
