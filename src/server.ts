import { ObjectId } from 'bson';
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

//Post new entry
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

//Get all entries
app.get('/api/alllocations/', async (_request, response) => {
  const allLocations = await getItinerary().find({}).toArray();
  response.status(200).send(allLocations);
});

//Delete one entry
app.delete('/api/location/:id', async (request, response) => {
  const { id } = request.params;
  const findEntrytoDelete = await getItinerary().deleteOne({
    _id: new ObjectId(id),
  });
  console.log(findEntrytoDelete);
  if (findEntrytoDelete.deletedCount !== 0) {
    response.status(200).send('Successfully deleted');
  } else {
    response.send('Unable to delete');
  }
});

//Update one entry
app.patch('/api/location/:id', async (request, response) => {
  console.log('Update incoming');
  const { id } = request.params;
  const { newLocationName } = request.body;
  const existingLocation = await getItinerary().updateOne(
    { _id: new ObjectId(id) },
    { $set: { locationName: newLocationName } }
  );
  console.log(existingLocation);
  if (existingLocation) {
    response.status(200).send(`${existingLocation} updated!`);
  } else {
    response.status(409).send(`Location was not found`);
  }
  response.end();
});

//Get one enry
/* app.get('/api/me', (request, response) => {
  const username = request.locationName;
  const foundUser = users.find((user) => user.name === username);
  if (foundUser) {
    response.send(foundUser);
  } else {
    response.status(404).send('User not found');
  }
}); */

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
