const axios = require('axios');
const cors = require('cors');
const express = require('express');

const corsMiddleware = express('./src/Middleware/cors');

const router = express.Router();

const app = express();
const port = 3333;

const serverDate = new Date();

app.use(cors());
app.use(corsMiddleware);
app.use(express.json());

router.get('/services/status', (request, response) => {
  console.log('success');

  const date = new Date();
  setTimeout(() => {
    axios
      .get('http://localhost:3000/webhook/status')
      .then(() => {
        console.log(`sended`);
      })
      .catch(() => {
        console.log(`error - non-sending`);
      });
  }, 1000);
  return response.send('success');
});

app.use(router);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
