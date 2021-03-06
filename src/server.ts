import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ObjectId } from 'mongodb';

import { connectDatabase, getItinerary } from './utils/database';

const app = express();
const port = process.env.PORT || 3001;

if (!process.env.MONGODB_URI) {
  throw new Error("Couldn't connect to the database");
}

app.use(express.json());

app.post('/api/location/', async (request, response) => {
  const newLocation = request.body;
  {
    await getItinerary().insertOne(newLocation);
    response.send(`Location was created`);
  }
  response.end();
});

app.get('/api/locations/', async (_request, response) => {
  const allLocations = await getItinerary().find({}).toArray();
  response.status(200).send(allLocations);
});

app.get('/api/location/:id', async (request, response) => {
  const { id } = request.params;
  const findLocation = await getItinerary()
    .find({
      _id: new ObjectId(id as string),
    })
    .toArray();
  console.log(findLocation);
  if (findLocation) {
    console.log('Done');
    response.status(200).send(findLocation);
  } else {
    console.log('Error');
    response.send('Error');
  }
});

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

app.patch('/api/location/:id', async (request, response) => {
  console.log('Update incoming');
  const { id } = request.params;
  const { updateDestination } = request.body;
  const existingLocation = await getItinerary().updateOne(
    { _id: new ObjectId(id) },
    { $set: { newDestination: updateDestination } }
  );
  if (existingLocation) {
    response.status(200).send(`${existingLocation} updated!`);
  } else {
    response.status(409).send(`Location was not found`);
  }
  response.end();
});

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello API!' });
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

connectDatabase(process.env.MONGODB_URI || '').then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });
});
