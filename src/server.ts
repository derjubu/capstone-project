import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectDatabase } from './app/utils/database';
import { getItinerary } from './app/utils/database';

const app = express();
const port = process.env.PORT || 3001;

if (!process.env.VITE_MONGODB_URI) {
  throw new Error("Couldn't connect to the database");
}

app.use(express.json());

app.post('/api/location/', async (request, response) => {
  const newLocation = request.body;
  const existingLocation = await getItinerary().findOne({
    location: newLocation.locationName,
  });
  if (existingLocation) {
    response.status(409).send(`${existingLocation} already exists!`);
  } else {
    await getItinerary().insertOne(newLocation);
    response.send(`Location was created`);
  }
  response.end();
});

app.get('/api/alllocations/', async (_request, response) => {
  const allLocations = await getItinerary().find({}).toArray();
  console.log('serverTS');
  response.status(200).send(allLocations);
});

app.delete('/api/delete/', async (request, response) => {
  const toBeDeleted = request.body;
  const findEntrytoDelete = await getItinerary().deleteOne({
    locationName: toBeDeleted.locationName,
  });
  console.log(findEntrytoDelete);
  if (findEntrytoDelete.deletedCount !== 0) {
    response.status(200).send('Successfully deleted');
  } else {
    response.send('Unable to delete');
  }
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

connectDatabase(process.env.VITE_MONGODB_URI || '').then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });
});
