const cors = require('cors');
const express = require('express');
const http = require('http');

const corsMiddleware = express('./src/Middleware/cors');

const routes = require('./routes');
const webhooks = require('./src/Services/webhooks');

const port = process.env.PORT || 3333;

const app = express();
// const router = express.Router();

app.use(cors());
app.use(corsMiddleware);
app.use(routes);

const server = http.createServer(app);

app.use(() => webhooks(server));

server.listen(port, () => console.log(`Listening on port ${port}`));
