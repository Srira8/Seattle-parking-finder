const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 3000;

// Seattle On-Street Parking Sensors API
const PARKING_API = 'https://data.seattle.gov/resource/7xcv-svzp.json?$limit=100';

app.get('/', (req, res) => {
  res.send('Seattle Parking Finder API is running! Go to /parking to see data.');
});

app.get('/parking', async (req, res) => {
  try {
    const response = await axios.get(PARKING_API);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching parking data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
