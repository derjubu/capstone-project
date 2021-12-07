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

app.post('/api/location/', async (req, res) => {
  const newLocation = req.body;
  const existingLocation = await getItinerary().findOne({
    location: newLocation.locationName,
  });
  if (existingLocation) {
    res.status(409).send(`${existingLocation} already exists!`);
  } else {
    await getItinerary().insertOne(newLocation);
    res.send(`Location was created`);
  }
});

app.get('/api', (_request, response) => {
  response.json({ message: 'Hello API!' });
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
